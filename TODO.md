# Riftline: Breach Protocol — 交付待辦

- [x] Remix 遊戲核心：已整合 GameDev Showcase「Iron Rift FPS」提供的遊戲程式、執行素材與設定至初始化 Three.js/game-3d 專案；遊戲介面和玩家可見文案使用繁體中文；保留原有玩法、本機存檔、WebDev Tweak bridge 與 Three.js runtime。`pnpm typecheck`、`pnpm test`（31 項）及正式 Web build 已通過。
- [x] 品牌與分享資產：使用新標題《Riftline: Breach Protocol》，產生新的遊戲專屬 favicon 與 OG 封面；原始來源分享圖保留於 `source-reference/`；完成 sharing metadata、Storage 同步與首屏純色載入畫面。
- [x] 訪客共享排行榜實作：猛攻／死鬥分榜、guest client/server 與同源 `/api/*` 路由已設定；僅使用訪客身份，不提供登入、帳號綁定或跨裝置雲端存檔；使用 WebDev managed database。已建立僅新增榜單定義的 migration，不建立登入／帳號 schema；資料庫回報 migrations current。API 的線上對局驗收尚待 checkpoint preview。
- [ ] 訪客排行榜線上驗收：在已存檔的 checkpoint preview 驗證 health、boards、guest run、score submit、排名刷新及重試；確認 API 暫時失效時離線玩法仍可用。
- [ ] 即時多人 FPS：玩家可經網路加入同一對局、互相看見及交戰；需使用你準備的 Cloud Computer，並完成已發布網址上的多人驗收。目前裝置清單只有 Sandbox，死鬥模式仍是對戰機器人，不可宣稱即時多人已可用。
- [ ] GitHub 程式碼同步：先保存本版 checkpoint，再依 WebDev canonical Git 流程請你確認建立新的私人倉庫，接著同步包含該 checkpoint 的 `main`。GitHub Pages 不作為完整線上遊戲主機。
- [ ] 完成交付與發布：即時多人主機及 guest leaderboard 驗收完成後，確認版本內容和發布目標，再以 Manus/WebDev 發布完整線上版；核對公開 URL 與分享 metadata。
