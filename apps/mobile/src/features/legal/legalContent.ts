import type { AppLanguage } from '@/types/app';

export type LegalSection = {
  body: string[];
  title: string;
};

type LegalDocument = {
  effectiveDate: string;
  introduction: string[];
  sections: LegalSection[];
  title: string;
};

export type LegalDocumentKey = 'privacy' | 'terms';

export function getLegalDocument(key: LegalDocumentKey, language: AppLanguage): LegalDocument {
  const documents = language === 'en' ? englishDocuments : japaneseDocuments;

  return documents[key];
}

const japaneseDocuments: Record<LegalDocumentKey, LegalDocument> = {
  terms: {
    effectiveDate: '2026年5月21日',
    title: '利用規約',
    introduction: [
      '本利用規約は、株式会社corectyが提供するiOSアプリ「やわらか返信」および関連サービス（英語名「SoftReply」）の利用条件を定めるものです。',
      'ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。本規約に同意できない場合、本サービスを利用できません。',
      '運営者：株式会社corecty',
      '所在地：154-0024 東京都世田谷区三軒茶屋2丁目11-14土屋ビル103',
      '代表者：加藤優介',
      'お問い合わせ先：アプリ内の問い合わせフォーム',
    ],
    sections: [
      {
        title: '1. 本サービスの内容',
        body: [
          '本サービスは、ユーザーが入力した本音、強い表現、愚痴、返信文案などを、AIを用いて相手に送信しやすい自然な表現へ変換する補助ツールです。',
          '本サービスは、文章変換、複数案表示、怒り度・失礼度・圧の強さの参考表示、履歴保存、コピー、再生成、利用回数管理、課金プラン、アカウント管理などの機能を提供します。',
          'AI生成結果、スコア、診断コメントその他の出力は参考情報です。常に正確、適切、完全、最新であること、または相手との関係悪化、トラブル、炎上、誤解を必ず防止することを保証しません。',
        ],
      },
      {
        title: '2. アカウント登録・認証',
        body: [
          'ユーザーは、メールリンク認証、Appleログイン、LINEログインその他当社が指定する方法により本サービスへログインできます。',
          'ユーザーは、登録または認証に必要な情報を正確に提供し、第三者になりすまして本サービスを利用してはなりません。',
          'ユーザーは、自身のアカウント、端末、認証情報を適切に管理する責任を負います。',
        ],
      },
      {
        title: '3. 入力内容とユーザー責任',
        body: [
          'ユーザーは、本サービスに文章を入力する際、個人情報、機密情報、営業秘密、認証情報、金融情報、医療情報、法律相談内容、第三者のプライバシーに関する情報を入力しないよう注意してください。',
          '本サービスの性質上、ユーザーが入力した文章および生成結果は、文章変換、履歴表示、利用回数管理、品質改善、管理画面での確認、違反対応などのために保存・処理される場合があります。',
          'ユーザーは、生成結果を自身の責任で確認・編集したうえで利用するものとします。',
        ],
      },
      {
        title: '4. 禁止事項',
        body: [
          'ユーザーは、法令または公序良俗に反する行為、犯罪行為、脅迫、嫌がらせ、差別、誹謗中傷、名誉毀損、プライバシー侵害、ストーカー行為、ハラスメントを目的とする利用をしてはなりません。',
          '相手を威圧する、黙らせる、心理的に追い詰める、不当に操作する目的での利用、自傷・他害を助長する利用、違法行為を助長する利用は禁止します。',
          '医療、法律、金融、税務その他専門的判断が必要な事項について、専門家の助言の代替として本サービスを利用してはなりません。',
          '本サービス、API、認証、課金、セキュリティを妨害、解析、回避、過負荷化する行為、または本サービスを無断で複製、販売、再配布する行為は禁止します。',
        ],
      },
      {
        title: '5. AI生成結果の取扱い',
        body: [
          '生成結果には、不自然、不正確、不適切、誤解を招く、またはユーザーの意図と異なる表現が含まれる場合があります。',
          'ユーザーは、生成結果を送信または利用する前に、相手、場面、法令、社内規程、契約、社会通念等に照らして適切かを確認してください。',
          '当社は、生成結果をそのまま利用したことにより生じた人間関係上、業務上、法的、経済的その他一切の結果について、当社の故意または重過失がある場合を除き責任を負いません。',
        ],
      },
      {
        title: '6. 知的財産権',
        body: [
          '本サービス、アプリ、画面、ロゴ、デザイン、プログラム、データベース、文章、画像その他本サービスを構成する一切の要素に関する権利は、当社または正当な権利者に帰属します。',
          'ユーザーが本サービスに入力した文章について、ユーザーまたは正当な権利者に帰属する権利は、本規約により当社へ移転しません。',
          'ユーザーは、当社に対し、本サービスの提供、保存、表示、分析、品質改善、不具合対応、違反対応、管理画面での確認に必要な範囲で、入力内容および生成結果を利用する権利を許諾します。',
        ],
      },
      {
        title: '7. 無料利用・有料プラン',
        body: [
          '本サービスは、無料利用枠と有料プランを提供する場合があります。無料利用枠、有料プランの内容、利用回数、価格、提供条件は、アプリ内表示またはApp Store上の表示に従います。',
          '有料プランは「Pro」等の名称で提供され、月額または年額の自動更新サブスクリプションとして提供される場合があります。',
          '当社は、有料プランを完全無制限とは表示せず、合理的な利用上限または目安を設けることがあります。',
        ],
      },
      {
        title: '8. App Store課金・解約・返金',
        body: [
          'iOSアプリ内で提供される有料プランの購入、請求、更新、解約、返金は、AppleのApp StoreおよびApple IDの設定を通じて行われます。',
          'ユーザーが有料プランを解約する場合、Apple IDのサブスクリプション管理画面から手続を行う必要があります。本サービス上でアカウントを削除しても、App Storeのサブスクリプションは自動的に解約されません。',
          '返金の可否および手続は、Appleの規約および判断に従います。購入状態の確認、購入復元、権限判定にはRevenueCat等の外部サービスを利用する場合があります。',
        ],
      },
      {
        title: '9. サービスの変更・停止・終了',
        body: [
          '当社は、ユーザーへの事前通知なく、本サービスの内容、仕様、利用条件、料金、利用回数、対応機能を変更、追加、停止、終了することがあります。',
          '保守、障害、外部サービスの停止、法令対応、セキュリティ上の理由、その他当社が必要と判断した場合、本サービスの全部または一部を停止できます。',
        ],
      },
      {
        title: '10. 利用制限・アカウント削除',
        body: [
          '当社は、ユーザーが本規約に違反した場合、または違反のおそれがあると合理的に判断した場合、事前通知なく、利用制限、履歴の削除、アカウント停止、アカウント削除その他必要な措置を講じることがあります。',
          'ユーザーは、アプリ内の退会機能によりアカウント削除を申請できます。アカウント削除により、履歴、利用状況、アカウント関連データが削除される場合があります。',
          'アカウント削除後も、法令遵守、紛争対応、不正利用対策、会計・課金記録、バックアップ等のために必要な情報が一定期間残る場合があります。',
        ],
      },
      {
        title: '11. 外部サービス',
        body: [
          '本サービスは、Supabase、OpenAI、RevenueCat、Apple、LINE、Render、Vercelその他の外部サービスを利用する場合があります。',
          '外部サービスの利用には、それぞれの事業者が定める規約・プライバシーポリシーが適用される場合があります。外部サービスの仕様変更、停止、障害、料金変更、規約変更等により本サービスに影響が生じる場合があります。',
        ],
      },
      {
        title: '12. 保証の否認・責任の制限',
        body: [
          '当社は、本サービスが中断なく、エラーなく、安全に、または特定の端末・OS・環境で常に利用できることを保証しません。',
          '当社は、本サービスがユーザーの期待する成果、対人関係の改善、クレーム回避、業務上の成功、法的リスク回避等を保証するものではありません。',
          '当社は、本サービスに関連してユーザーに生じた損害について、当社の故意または重過失がある場合を除き責任を負いません。当社が責任を負う場合であっても、通常かつ直接の損害に限り、適用法令上許される範囲で、当該損害発生月にユーザーが本サービスに関して支払った金額を上限とします。',
        ],
      },
      {
        title: '13. 規約の変更',
        body: [
          '当社は、必要に応じて本規約を変更できます。変更後の規約は、本サービス内または当社が適切と判断する方法で掲載した時点から効力を生じます。重要な変更については、合理的な方法により周知します。',
        ],
      },
      {
        title: '14. 準拠法・管轄',
        body: [
          '本規約は日本法に準拠します。本サービスまたは本規約に関連して当社とユーザーとの間で紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。',
        ],
      },
      {
        title: '15. 連絡先',
        body: [
          '本サービス、本規約、退会、個人情報の取扱いに関するお問い合わせは、アプリ内の問い合わせフォームからご連絡ください。',
        ],
      },
    ],
  },
  privacy: {
    effectiveDate: '2026年5月21日',
    title: 'プライバシーポリシー',
    introduction: [
      '株式会社corectyは、当社が提供するiOSアプリ「やわらか返信」および関連サービス（英語名「SoftReply」）におけるユーザー情報の取扱いについて、本プライバシーポリシーを定めます。',
      '本サービスは、ユーザーが入力した文章をAIで変換する性質上、入力内容に個人情報や機密情報が含まれる可能性があります。個人情報や機密情報を入力しないよう注意してください。',
      '運営者：株式会社corecty',
      '所在地：154-0024 東京都世田谷区三軒茶屋2丁目11-14土屋ビル103',
      '代表者：加藤優介',
      'お問い合わせ先：アプリ内の問い合わせフォーム',
    ],
    sections: [
      {
        title: '1. 取得する情報',
        body: [
          '当社は、SupabaseユーザーID、メールアドレス、AppleログインまたはLINEログインに関連する識別子、表示名、認証プロバイダー情報を取得する場合があります。',
          '当社は、ユーザーが入力した文章、選択した文体・相手・変換タイプ・言語、AI生成結果、スコア、診断コメント、コピー状態、フィードバック、作成日時を取得する場合があります。',
          '当社は、生成履歴、利用回数、初回無料残数、日次/月次利用状況、Pro状態、退会状態を取得する場合があります。',
          '当社は、RevenueCat App User ID、商品ID、Entitlement、購入・更新・解約・有効期限等のイベント情報、App Storeの購入状態に関する情報を取得する場合があります。',
          '問い合わせ時には、ユーザーが提供した氏名、メールアドレス、問い合わせ内容、返信履歴を取得する場合があります。',
          '当社は、アプリ環境、OS、端末情報、IPアドレス、アクセス日時、APIリクエスト、エラー情報、ログ、クラッシュ関連情報を取得する場合があります。',
        ],
      },
      {
        title: '2. 利用目的',
        body: [
          '本サービスの提供、本人確認、ログイン状態の管理のため。',
          '入力文章のAI変換、生成結果の表示、履歴保存、コピー、再生成、利用回数管理のため。',
          '有料プランの購入状態確認、購入復元、Pro権限管理、RevenueCat webhookによる同期のため。',
          '不具合調査、障害対応、品質改善、UI/UX改善、プロンプト改善のため。',
          '管理画面での生成履歴確認、公開候補の手動審査、個人情報・機密情報混入防止、不正利用対策のため。',
          '問い合わせ対応、本人確認、重要なお知らせ、規約・ポリシー変更の通知、法令・App Store審査・契約・利用規約に基づく対応のため。',
        ],
      },
      {
        title: '3. AI処理について',
        body: [
          '本サービスでは、ユーザー入力および関連する選択項目を、文章変換のためにOpenAI APIへ送信します。',
          'OpenAI APIの仕様上、送信されたデータは、不正利用監視、セキュリティ、法令遵守等のために一定期間保持される場合があります。',
          'OpenAI APIへ送信されるデータは、当社がOpenAIに対して明示的に同意または設定しない限り、OpenAIのモデル学習に利用されないものとして取り扱われます。ただし、OpenAIのサービス仕様・ポリシー変更がある場合があります。',
        ],
      },
      {
        title: '4. 第三者サービス・外部送信',
        body: [
          '当社は、認証、データ保存、履歴保存、利用回数管理のためにSupabaseを利用します。',
          '当社は、AI文章変換のためにOpenAIを利用します。',
          '当社は、サブスクリプション管理、購入状態確認、購入復元のためにRevenueCatを利用します。',
          '当社は、Sign in with Apple、App Store課金、購入・返金・サブスクリプション管理のためにAppleの仕組みを利用します。',
          '当社は、LINEログインのためにLINEの仕組みを利用します。',
          '当社は、API、管理画面、ホスティングのためにRender、Vercel等を利用する場合があります。',
        ],
      },
      {
        title: '5. 第三者提供・委託',
        body: [
          '当社は、ユーザーの同意がある場合、本サービス提供に必要な範囲で外部サービス事業者・決済管理事業者・クラウド事業者・業務委託先に提供または取扱いを委託する場合、法令に基づく場合、人の生命・身体・財産保護のために必要な場合、公的機関への協力が必要な場合、事業承継に伴う場合を除き、個人データを第三者に提供しません。',
          '当社は、個人データの取扱いを外部に委託する場合、委託先に対して必要かつ適切な監督を行います。',
        ],
      },
      {
        title: '6. 安全管理措置',
        body: [
          '当社は、漏えい、滅失、毀損、不正アクセス、不正利用を防止するため、OpenAI APIキー、Supabase service role key等の秘密情報をモバイルアプリに含めず、サーバー側で管理します。',
          '当社は、ユーザーごとのデータアクセス制御、Supabase RLS、API認証、管理画面認証、通信の暗号化、アクセス権限管理、ログ監視、脆弱性対応を行います。',
          '当社は、公開候補の確認を手動審査とし、個人情報・機密情報の自動公開を防止します。',
        ],
      },
      {
        title: '7. 保存期間',
        body: [
          'アカウント情報、生成履歴、利用状況、課金状態は、本サービス提供に必要な期間保存します。',
          'ユーザーが履歴を削除した場合、対象履歴は通常のアプリ表示から削除されます。ただし、バックアップ、ログ、監査、不正利用対策、法令遵守のために一定期間残る場合があります。',
          'ユーザーが退会した場合、アカウントに紐づく主要データは削除されます。ただし、法令遵守、会計、課金、紛争対応、不正利用対策、バックアップのために必要な情報が一定期間残る場合があります。',
        ],
      },
      {
        title: '8. ユーザーの権利',
        body: [
          'ユーザーは、適用法令に従い、当社が保有する自己に関する個人データについて、利用目的の通知、開示、訂正、追加、削除、利用停止、消去、第三者提供停止等を求めることができます。',
          '請求を行う場合は、本ポリシー末尾の問い合わせ窓口へご連絡ください。当社は、本人確認を行ったうえで、法令に従い合理的な範囲で対応します。',
        ],
      },
      {
        title: '9. 退会・サブスクリプション解約',
        body: [
          'ユーザーは、アプリ内の設定画面からアカウント削除を行うことができます。',
          'アカウント削除により、履歴、利用状況、アカウント関連データが削除されます。',
          'アカウント削除は、App Storeのサブスクリプション解約を意味しません。サブスクリプションの解約は、ユーザー自身がApple IDのサブスクリプション管理画面から行う必要があります。',
        ],
      },
      {
        title: '10. 国外へのデータ移転',
        body: [
          '本サービスでは、OpenAI、Supabase、RevenueCat、Apple、LINE、Render、Vercel等、国外に所在する事業者または国外サーバーを利用する場合があります。そのため、ユーザー情報が日本国外で保存または処理される場合があります。',
        ],
      },
      {
        title: '11. ポリシーの変更',
        body: [
          '当社は、必要に応じて本プライバシーポリシーを変更できます。変更後のポリシーは、本サービス内に掲載した時点から効力を生じます。重要な変更については、合理的な方法で周知します。',
        ],
      },
      {
        title: '12. お問い合わせ窓口',
        body: [
          '個人情報の取扱い、本ポリシー、開示等の請求、苦情、相談については、アプリ内の問い合わせフォームからご連絡ください。',
        ],
      },
    ],
  },
};

const englishDocuments: Record<LegalDocumentKey, LegalDocument> = {
  terms: {
    effectiveDate: 'May 21, 2026',
    title: 'Terms of Use',
    introduction: [
      'These Terms of Use govern your use of the iOS app "SoftReply" / "やわらか返信" and related services provided by corecty Inc.',
      'By using the Service, you agree to these Terms. If you do not agree, you may not use the Service.',
      'Operator: corecty Inc.',
      'Address: Tsuchiya Building 103, 2-11-14 Sangenjaya, Setagaya-ku, Tokyo 154-0024, Japan.',
      'Representative: Yusuke Kato.',
      'Contact: in-app contact form.',
    ],
    sections: [
      {
        title: '1. Service Overview',
        body: [
          'The Service helps users rewrite emotionally charged, blunt, or honest drafts into messages that may be easier to send.',
          'The Service may provide rewritten alternatives, tone scores, usage history, copy features, regeneration, subscriptions, and account settings.',
          'AI-generated outputs and scores are reference drafts only. We do not guarantee accuracy, appropriateness, completeness, conflict avoidance, or any relationship outcome.',
        ],
      },
      {
        title: '2. Accounts',
        body: [
          'You may sign in through email link authentication, Sign in with Apple, LINE Login, or other methods we provide.',
          'You must provide accurate information and must not impersonate another person.',
          'You are responsible for managing your account, device, and authentication credentials.',
        ],
      },
      {
        title: '3. Inputs and Responsibility',
        body: [
          'Do not enter personal information, confidential information, trade secrets, credentials, payment information, medical information, legal consultation details, or third-party private information.',
          'Inputs, outputs, selected options, scores, comments, usage records, and copy events may be stored and processed to provide the Service, show history, manage usage, improve quality, operate admin review, and respond to abuse or support requests.',
          'You are responsible for reviewing and editing outputs before using or sending them.',
        ],
      },
      {
        title: '4. Prohibited Conduct',
        body: [
          'You must not use the Service for illegal activity, threats, harassment, discrimination, defamation, privacy invasion, stalking, abusive conduct, self-harm, harm to others, dangerous acts, or assistance with wrongdoing.',
          'You must not use the Service to manipulate, intimidate, coerce, or psychologically pressure another person.',
          'You must not use the Service as a substitute for professional legal, medical, financial, tax, or other expert advice.',
          'You must not interfere with, reverse engineer, overload, bypass, or attack the Service, APIs, authentication, payment, or security systems.',
        ],
      },
      {
        title: '5. AI Outputs',
        body: [
          'Outputs may be unnatural, inaccurate, inappropriate, misleading, or different from your intent.',
          'You must check whether outputs are appropriate for the recipient, context, law, workplace rules, contracts, and social norms before using them.',
          'We are not responsible for interpersonal, business, legal, financial, or other consequences arising from your use of outputs, except where caused by our willful misconduct or gross negligence.',
        ],
      },
      {
        title: '6. Intellectual Property',
        body: [
          'All rights in the Service, app, screens, logo, design, program, database, text, and other Service components belong to us or the relevant rights holders.',
          'Your rights in text you input are not transferred to us by these Terms.',
          'You grant us the rights necessary to process inputs and outputs to provide, store, display, analyze, improve, debug, moderate, and operate the Service.',
        ],
      },
      {
        title: '7. Free Use and Paid Plans',
        body: [
          'The Service may offer free usage and paid plans. Usage limits, pricing, and plan details are shown in the app or on the App Store.',
          'Paid plans may be provided as auto-renewing subscriptions, such as monthly or yearly Pro plans.',
          'Pro is not unlimited. We may set reasonable usage limits or reference limits.',
        ],
      },
      {
        title: '8. App Store Billing',
        body: [
          'Purchases, billing, renewal, cancellation, and refunds for iOS subscriptions are handled through Apple’s App Store and Apple ID settings.',
          'Deleting your Service account does not automatically cancel your App Store subscription. You must cancel it through your Apple account settings.',
          'We may use RevenueCat or similar services to verify purchase status, restore purchases, and manage subscription entitlements.',
        ],
      },
      {
        title: '9. Changes and Suspension',
        body: [
          'We may change, suspend, or terminate all or part of the Service, including features, limits, pricing, and availability, where reasonably necessary.',
          'Third-party service outages, policy changes, or technical issues may affect the Service.',
        ],
      },
      {
        title: '10. Account Restrictions and Deletion',
        body: [
          'If you violate these Terms or we reasonably suspect violation, we may restrict use, delete content or history, suspend your account, or delete your account.',
          'You may request account deletion in the app. Deletion may remove history, usage records, and account-related data.',
          'Some information may remain for legal compliance, dispute handling, fraud prevention, accounting, subscription records, or backup purposes.',
        ],
      },
      {
        title: '11. Disclaimer and Liability',
        body: [
          'We do not guarantee uninterrupted, error-free, secure, or device-compatible operation.',
          'We do not guarantee the correctness, completeness, suitability, or outcome of outputs, scores, history, usage counts, subscription status, or admin functions.',
          'To the maximum extent permitted by law, our liability is limited to direct and ordinary damages and, for paid users, to the amount paid for the Service in the month in which the damage occurred, unless applicable law does not allow such limitation.',
        ],
      },
      {
        title: '12. Governing Law and Contact',
        body: [
          'These Terms are governed by the laws of Japan. Any dispute will be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.',
          'For questions about the Service or these Terms, please use the in-app contact form.',
        ],
      },
    ],
  },
  privacy: {
    effectiveDate: 'May 21, 2026',
    title: 'Privacy Policy',
    introduction: [
      'This Privacy Policy explains how corecty Inc. handles information in the iOS app "SoftReply" / "やわらか返信" and related services.',
      'Because the Service rewrites text entered by users, inputs may accidentally include personal or confidential information. Please do not enter personal or confidential information.',
      'Operator: corecty Inc.',
      'Address: Tsuchiya Building 103, 2-11-14 Sangenjaya, Setagaya-ku, Tokyo 154-0024, Japan.',
      'Representative: Yusuke Kato.',
      'Contact: in-app contact form.',
    ],
    sections: [
      {
        title: '1. Information We Collect',
        body: [
          'We may collect account information such as Supabase user ID, email address, Apple or LINE login identifiers, display name, and authentication provider.',
          'We may collect input text, selected style, audience, transform type, language, AI outputs, scores, diagnostic comments, copy state, feedback, and timestamps.',
          'We may collect generation history, usage counters, free usage remaining, daily/monthly usage, Pro status, and account deletion state.',
          'We may collect RevenueCat App User ID, product ID, entitlement, purchase, renewal, cancellation, expiration, and App Store subscription status events.',
          'If you contact us, we may collect your name, email address, inquiry content, and support correspondence.',
          'We may collect technical information such as app environment, OS, device information, IP address, access time, API request data, error data, logs, and crash-related information.',
        ],
      },
      {
        title: '2. Purposes of Use',
        body: [
          'To provide the Service, authenticate users, and maintain sessions.',
          'To rewrite text, show outputs, save history, copy results, regenerate, and manage usage limits.',
          'To verify paid plans, restore purchases, manage Pro entitlements, and sync RevenueCat webhook events.',
          'To investigate bugs, handle incidents, improve quality, improve prompts, and maintain the Service.',
          'To support admin review, prevent accidental public disclosure of personal or confidential information, and respond to abuse.',
          'To respond to inquiries, verify users, provide important notices, comply with laws, satisfy App Store review requirements, and enforce our Terms.',
        ],
      },
      {
        title: '3. AI Processing',
        body: [
          'We send input text and related options to the OpenAI API to generate rewritten text.',
          'OpenAI may retain API data for abuse monitoring, security, legal compliance, or similar purposes according to its policies.',
          'Unless we explicitly opt in or configure otherwise, OpenAI API data is treated as not used to train OpenAI models. OpenAI policies and service specifications may change.',
        ],
      },
      {
        title: '4. Third-Party Services',
        body: [
          'We use Supabase for authentication, database, history, and usage counters.',
          'We use OpenAI for AI text rewriting.',
          'We use RevenueCat for subscription management, entitlement verification, and purchase restoration.',
          'We use Apple for Sign in with Apple, App Store billing, and subscription management.',
          'We use LINE for LINE Login.',
          'We may use Render, Vercel, and similar providers for APIs, admin tools, and hosting.',
        ],
      },
      {
        title: '5. Sharing and Disclosure',
        body: [
          'We do not disclose personal data to third parties except with your consent, where necessary for service providers or contractors to provide the Service, as required by law, to protect life/body/property, to cooperate with public authorities, or in connection with business succession.',
          'When we entrust personal data handling to a contractor, we provide necessary and appropriate supervision.',
        ],
      },
      {
        title: '6. Security',
        body: [
          'We take reasonable measures to prevent leakage, loss, damage, unauthorized access, and misuse.',
          'OpenAI API keys and Supabase service role keys are not included in the mobile app and are managed on the server side.',
          'We use per-user access control, Supabase RLS, API authentication, admin authentication, encrypted communications, access control, logging, and vulnerability response.',
        ],
      },
      {
        title: '7. Retention',
        body: [
          'Account data, generation history, usage data, and subscription state are retained as long as necessary to provide the Service.',
          'Deleted history may remain in backups, logs, audit records, or security records for a limited period.',
          'After account deletion, primary account-linked data is deleted, but information may remain as necessary for legal compliance, accounting, subscription records, disputes, fraud prevention, or backups.',
        ],
      },
      {
        title: '8. Your Rights',
        body: [
          'Subject to applicable law, you may request disclosure, correction, addition, deletion, suspension of use, erasure, or suspension of third-party provision of your personal data.',
          'Contact us using the contact information below. We may verify your identity before responding.',
        ],
      },
      {
        title: '9. Account Deletion and Subscription Cancellation',
        body: [
          'You may delete your account in the app settings.',
          'Account deletion removes history, usage, and account-related data as described in this Policy.',
          'Account deletion does not cancel App Store subscriptions. You must cancel subscriptions through your Apple account settings.',
        ],
      },
      {
        title: '10. International Transfers and Changes',
        body: [
          'We may use providers or servers located outside Japan, including OpenAI, Supabase, RevenueCat, Apple, LINE, Render, and Vercel. Your information may be stored or processed outside Japan.',
          'We may update this Privacy Policy as necessary. The updated policy takes effect when posted in the Service. We will provide reasonable notice for material changes.',
          'For questions about this Privacy Policy or personal data requests, please use the in-app contact form.',
        ],
      },
    ],
  },
};
