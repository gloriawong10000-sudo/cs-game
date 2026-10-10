import { createLeaderboardClient } from '../../leaderboard.js'
import type { Leaderboard, LeaderboardClient, Result, RunTicket, Submission } from '../../leaderboard.js'
import type { GameMode } from '../game/game'

/** Immutable public boards; scoring changes require new IDs and rules versions. */
export const ONLINE_BOARDS: Readonly<Record<GameMode, { id: string; rulesVersion: string }>> = {
  onslaught: { id: 'onslaught-score-v1', rulesVersion: 'v1' },
  deathmatch: { id: 'deathmatch-score-v1', rulesVersion: 'v1' },
}

export type RankedRun = {
  mode: GameMode
  client: LeaderboardClient
  ticket: RunTicket
}

/** Guest-only online rankings. Local play and SaveStore remain independent of this service. */
export class GuestLeaderboards {
  private client(mode: GameMode): LeaderboardClient {
    const board = ONLINE_BOARDS[mode]
    return createLeaderboardClient({
      identity: 'guest',
      boardId: board.id,
      rulesVersion: board.rulesVersion,
    })
  }

  list(mode: GameMode): Promise<Result<Leaderboard>> {
    return this.client(mode).list(10)
  }

  async begin(mode: GameMode, displayName: string): Promise<Result<RankedRun>> {
    const client = this.client(mode)
    const guest = await client.ensureGuest(displayName.trim().slice(0, 48) || 'PLAYER')
    if (!guest.ok) return { ok: false, error: guest.error }

    const started = await client.beginRun()
    if (!started.ok) return { ok: false, error: started.error }
    return { ok: true, value: { mode, client, ticket: started.value } }
  }

  submit(run: RankedRun, score: number, durationMs: number): Promise<Result<Submission>> {
    return run.client.submitRun(run.ticket, score, durationMs)
  }

  retry(run: RankedRun): Promise<Result<Submission>> {
    return run.client.retryRun(run.ticket)
  }
}
