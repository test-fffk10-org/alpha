# Alpha - React Application

This is a React application scaffolded with Vite, providing a modern and fast development experience.

## はじめに / Getting Started

### 必要な環境 / Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### インストール / Installation

依存関係は既にインストールされています。新しい環境でセットアップする場合：

Dependencies are already installed. To set up in a new environment:

```bash
npm install
```

### 開発サーバーの起動 / Start Development Server

```bash
npm run dev
```

アプリケーションは http://localhost:5173/ で起動します。

The application will start at http://localhost:5173/

### ビルド / Build

本番用にビルドするには：

To build for production:

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

Built files will be output to the `dist/` directory.

### プレビュー / Preview

ビルドしたアプリケーションをローカルでプレビューするには：

To preview the built application locally:

```bash
npm run preview
```

### Lint

コードの品質チェックを実行するには：

To check code quality:

```bash
npm run lint
```

## 技術スタック / Tech Stack

- **React** 19.1.1 - UIライブラリ / UI library
- **Vite** 7.1.7 - ビルドツール / Build tool
- **ESLint** 9.36.0 - コード品質チェック / Code quality checker

## プロジェクト構造 / Project Structure

```
alpha/
├── public/          # 静的ファイル / Static files
├── src/             # ソースコード / Source code
│   ├── assets/      # 画像などのアセット / Assets like images
│   ├── App.jsx      # メインのAppコンポーネント / Main App component
│   ├── App.css      # Appコンポーネントのスタイル / App component styles
│   ├── main.jsx     # エントリーポイント / Entry point
│   └── index.css    # グローバルスタイル / Global styles
├── index.html       # HTMLテンプレート / HTML template
├── package.json     # プロジェクト設定 / Project configuration
└── vite.config.js   # Vite設定 / Vite configuration
```

## 詳細情報 / More Information

### Vite + React

This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and ESLint rules.

### Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### TypeScript

If you are developing a production application, we recommend using TypeScript. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for more information.
