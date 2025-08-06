# Next.jsにおけるFont Awesome v7の検証

このドキュメントは、Next.jsアプリケーションでFont Awesome v7を使用する際の検証結果をまとめたものです。

**注意:** この検証は、Font Awesome v7の公式ドキュメントにアクセスせずに行われました。非推奨となったプロパティに関する情報は、ライブラリの進化における一般的なパターンと仮定に基づいています。

## 必須プロパティ

`FontAwesomeIcon`コンポーネントで唯一必須のプロパティは、引き続き`icon`です。

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon={faUser} />
```

## その他よく使われるプロパティ

以下のプロパティは、スタイリングのために引き続き期待どおりに機能します。

- `size`: アイコンのサイズを変更します（例: `"2x"`、`"lg"`）。
- `color`: アイコンの色を設定します。

## 非推奨の可能性があるプロパティ（仮定）

スタイリングに関する懸念をプロパティからCSSに移行するという一般的な傾向に基づき、以下のプロパティはv7で非推奨になると想定されます。

### `spin` と `pulse`

`spin`と`pulse`のブール値プロパティは削除される可能性があります。アニメーションはCSSクラスを介して処理する必要があります。独自のキーフレームアニメーションを定義するか、CSSフレームワークが提供する場合はユーティリティクラスを使用できます。

**例（CSS-in-JSを使用）:**

```jsx
<style jsx>{`
  @keyframes fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .fa-spin-custom {
    animation: fa-spin 2s infinite linear;
  }
`}</style>
<FontAwesomeIcon icon={faSpinner} className="fa-spin-custom" />
```

### `border`

`border`プロパティは削除される可能性が高いです。CSSを使用してボーダーを追加できます。

```jsx
<FontAwesomeIcon icon={faUser} style={{ border: '1px solid black', padding: '5px' }} />
```

## Next.jsとの統合

Next.js（App Router）でFont Awesomeを使用するには、Next.jsがCSSなしでサーバー上でアイコンをレンダリングしようとするのを防ぐ必要があります。

レイアウトまたはページコンポーネントに次の設定を追加します。

```javascript
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
```

これにより、スタイルが正しく読み込まれるようになります。

## v6からv7への移行の概要（仮定）

- **必須:** `icon`プロパティは引き続き必須です。
- **スタイリング:** `size`や`color`のようなプロパティは引き続き利用可能です。
- **非推奨:** `spin`、`pulse`、`border`プロパティは削除される可能性が高いです。これらの効果にはCSSを使用してください。
- **Next.js:** スタイリングを正しく適用するために、`config.autoAddCss = false;`の行を含めることを忘れないでください。