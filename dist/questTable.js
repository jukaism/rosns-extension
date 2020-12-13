var annivQuestList = [
  'No.2 月夜花の悪夢',
  'No.3 借金返済',
  'No.4 吟遊詩人',
  'No.6 異世界',
  'No.9 オーディン神殿発掘団',
  'No.10 鉄人料理長ニャスの伝説',
  'No.12 滅亡祝福教団',
  'No.14 ヘリオン',
  'No.16 飛行船　第1部',
  'No.18 生態研究',
  'No.20 ジャティ族の王冠',
  'No.24 工場',
  'No.25 The Sign1部',
  'No.26 消えた住民とバコナワ',
  'No.27 モモタロ体験館',
  'No.33 宝石',
  'No.34 魔王モロク追跡',
  'No.35 知恵の王の指輪',
  'No.36 通行証',
  'No.37 アユタヤダンジョン',
  'No.39 地下水路討伐',
  'No.40 通行手形',
  'No.44 Z団',
  'No.45 歴史学者',
  'No.47 ネジリアン帝国の陰謀',
  '',
  '',
  'No.2 生体工学研究所侵入',
  'No.4 駐屯地の人々',
  'No.6 地下遺跡アドベンチャー',
  'No.8 クジラ島を訪ねて',
  'No.9 レベンブルグ家の絆',
  'No.11 キル・ハイル',
  'No.12 破滅のダイヤモンド',
  'No.16 新人アコライトの幽霊',
  'No.17 父親探し',
  'No.18 ロックリッジ',
  'No.20 シドクス',
  'No.23 高台',
  'No.25 The Sign2部',
  'No.26 タートルアイランド',
  'No.27 飛行船　第2部',
  'No.29 デワタの伝統酒',
  'No.31 アルベルタの少年',
  'No.32 七王家とユミルの心臓',
  'No.35 レッケンベル運送',
  'No.36 ファンタスマゴリカ',
  'No.39 村長の剣',
  'No.40 運命のカラス',
  'No.42 会議のおとも',
  'No.44 新任看護師と病院',
  'No.45 恋人',
  'No.47 フローズンメモリー',
  'No.49 大統領　第1部',
  'No.1 レゲンシュルム研究所',
  'No.2 フレイムヴァレーへの道',
  'No.3 エルディカスティス',
  'No.5 紫色の竜',
  'No.11 ビフロスト',
  'No.13 双子の真実',
  'No.14 マヌクのモンスター討伐',
  'No.15 二つの種族',
  'No.16 魔術',
  'No.17 バルター家の調査',
  'No.20 レッケンベル社の噂',
  'No.22 トイレのオバケ',
  'No.24 ウィグナー家の心の箱',
  'No.25 The Sign3部',
  'No.26 友達のために',
  'No.27 大神官',
  'No.29 ルワンダに伝える話',
  'No.30 テラグローリア',
  'No.31 守護者',
  'No.32 トール火山の秘密',
  'No.34 隠された財宝',
  'No.36 至極の宴会料理',
  'No.37 ガラナ',
  'No.41 猫耳と尻尾の男',
  'No.44 不運のエメラルド',
  'No.46 三ヶ国への報告書',
  'No.47 言語習得',
  'No.49 モーラの温泉調査',
  '',
  '',
  'No.1 不吉な噂',
  'No.3 美しさの代償',
  'No.4 魔法使いのノート',
  'No.5 黒い石',
  'No.6 悠久なる絆',
  'No.10 スパイ疑惑',
  'No.11 隊長の贖罪',
  'No.12 イルシオン',
  'No.14 エクラージュの王',
  'No.15 パトリックを探して',
  'No.20 婚約者探し',
  'No.23 聖域の秘密',
  'No.26 地元騎士団～霧の森～',
  'No.30 冒険者達との出会い',
  'No.34 思い出の木',
  'No.35 修道院(名もなき島入場)',
  'No.36 ロペの捜索',
  'No.38 森の中の秘密',
  'No.40 料理作成',
  'No.44 陽居村の幽霊少女',
  'No.46 大統領　第2部',
  'No.47 塔の中の冒険者',
  '',
  ''
]

natsumiMD = [
  '<tt>&nbsp;1(火) </tt>魔神の塔', '', '',
  '<tt>&nbsp;2(水) </tt>封印された神殿', '', '',
  '<tt>&nbsp;3(木) </tt>サラの記憶', '', '',
  '<tt>&nbsp;4(金) </tt>ニーズヘッグの巣<br/>※1', '三ヶ国への報告書', '守護者',
  '<tt>&nbsp;5(土) </tt>地下排水路（エキスパート）', '', '',
  '<tt>&nbsp;6(日) </tt>呪いの剣士', '', '',
  '<tt>&nbsp;7(月) </tt>チャールストン工場', '', '',
  '<tt>&nbsp;8(火) </tt>禁忌の研究所<br/>※2', '生体工学研究所侵入', 'レゲンシュルム研究所',
  '<tt>&nbsp;9(水) </tt>闇のビョンウンゴ病院2階', '新任看護師と病院', '',
  '<tt>10(木) </tt>ホラーおもちゃ工場<br/>※Lv110以上', '', '',
  '<tt>11(金) </tt>フェンリルとサラ<br/>※Lv120以上', '', '',
  '<tt>12(土) </tt>バコナワの棲み処<br/>※Lv140以上', 'バコナワの伝説', '消えた住民とバコナワ',
  '<tt>13(日) </tt>悪夢のジターバグ（険しい)<br/>※Lv120以上', '', '',
  '<tt>14(月) </tt>古のグラストヘイム（ハード)<br/>※Lv130以上', '', '',
  '<tt>15(火) </tt>永劫の戦', '', '',
  '<tt>16(水) </tt>最後の部屋<br/>※Lv140以上', '地下遺跡アドベンチャー', '',
  '<tt>17(木) </tt>ブワヤの巣<br/>※Lv130以上', '森の中の秘密', '',
  '<tt>18(金) </tt>フェイスワームの巣<br/>※Lv140以上', '', '',
  '<tt>19(土) </tt>ビオスの島', 'フレイムヴァレーへの道', '',
  '<tt>20(日) </tt>過去の儀式の間<br/>※Lv160以上', '七王家とユミルの心臓', '',
  '<tt>21(月) </tt>モルスの洞窟', 'ビオスの島', '',
  '<tt>22(火) </tt>魔神殿', 'モルスの洞窟', '',
  '<tt>23(水) </tt>空中要塞<br/>※Lv150以上', '七王家とユミルの心臓', '',
  '<tt>24(木) </tt>ヴェルナー研究所中央室<br/>※Lv170以上', 'テラグローリア', '',
  '<tt>25(金) </tt>ハートハンター軍事基地<br/>※Lv160以上', 'テラグローリア', '',
  '<tt>26(土) </tt>オース二次捜索<br/>※Lv170以上', 'イルシオン', '',
  '<tt>27(日) </tt>グラストヘイムの没落<br/>※Lv170以上', '', '',
  '<tt>28(月) </tt>コルメモリアル<br/>※Lv175以上', 'イルシオン', ''
]
bingos = [[
  ['&#x1f4a5;', "ミニオン(ダークイリュージョン)(中級)5", "ミニオン(カーリッツバーグ)(中級)5"],
  ["月夜花の悪夢"],
  ["借金返済"],
  ["吟遊詩人"],
  ['&#x1f4a5;', "混沌のポポリン5", "混沌のバフォメット.Jr5"],
  ["異世界"],
  ['&#x1f4a5;', "魔眼のアムダライス"],
  ['&#x1f4a5;', "イエロークリスタル7", "グリーンクリスタル7"],
  ["オーディン神殿発掘団"],
  ["鉄人料理長ニャスの伝説"],
  ['&#x1f4e6;', "とてもかたい桃50", "黒い熊の皮50"],
  ["滅亡祝福教団"],
  ["Lv170を達成する", "その他"],
  ["ヘリオン"],
  ['&#x1f4a5;', "ミグエル"],
  ["飛行船　第1部"],
  ['&#x1f4a5;', "怒りのアイスタイタン5", "怒りのスノウアー5"],
  ["生態研究"],
  ['&#x1f4a5;', "無名のアーチャー"],
  ["ジャティ族の王冠"],
  ['&#x1f4e6;', "ベアロピー25", "ネジリアンのソウルストーン10"],
  ['&#x1f4a5;', "メイドの思念10"],
  ['&#x1f4e6;', "油紙50", "なめらかな紙50"],
  ["工場"],
  ["The Sign1部"],
  ["消えた住民とバコナワ"],
  ["モモタロ体験館"],
  ['&#x1f4a5;', "fff・ジターバグ"],
  ['&#x1f4e6;', "微かな夢の欠片50", "血の付いた恋文50"],
  ['&#x1f4a5;', "突撃赤バジルリスク50", "突撃緑バジルリスク50"],
  ['&#x1f4a5;', "古代のバドン3", "深海のカナトウス3", "深海のカニ3"],
  ["燃料補給"],
  ["宝石"],
  ["魔王モロク追跡"],
  ["知恵の王の指輪"],
  ["通行証"],
  ["アユタヤダンジョン"],
  ['&#x1f4a5;', "無名のソードマン（戦闘モード）（MVP）"],
  ["地下水路討伐"],
  ["通行手形"],
  ['&#x1f4a5;', "ラウンドライダー30", "サイドライダー30", "ブレードライダー30"],
  ['&#x1f4a5;', "凶暴な警備犬4"],
  ['&#x1f4a5;', "堕ちた白の騎士5", "腐敗した兵士35"],
  ["Z団"],
  ["歴史学者"],
  ['&#x1f4a5;', "暴走した船長ペルロック"],
  ["ネジリアン帝国の陰謀"],
  ['&#x1f4a5;', "ペル5"],
  ['&#x1f4a5;', "パワフルスケルトン", "パワフルSスケルトン", "パワフルAスケルトン"]
],
[
  ['&#x1f4e6;', "葉っぱの服50", "バンブーバスケット50"],
  ["生体工学研究所侵入"],
  ['&#x1f4a5;', "怒りの九尾狐5", "怨恨のソヒー5"],
  ["駐屯地の人々"],
  ['&#x1f4a5;', "サラの幻影"],
  ["地下遺跡アドベンチャー"],
  ['&#x1f4a5;', "スイング・ペル4"],
  ["クジラ島を訪ねて"],
  ["レベンブルグ家の絆"],
  ['&#x1f4a5;', "おもちゃ工場警備兵5", "包装されたボックス5"],
  ["キル・ハイル"],
  ["破滅のダイヤモンド"],
  ['&#x1f4a5;', "フェンリル"],
  ['&#x1f4a5;', "暴虐のシーラカンス", "変異のシーラカンス"],
  ['&#x1f4a5;', "死者のオークゾンビ15", "死者のベリット15", "死者のメガロドン15"],
  ["新人アコライトの幽霊"],
  ["父親探し"],
  ["ロックリッジ"],
  ["メモリアルダンジョン　異形の迷宮", "その他"],
  ["シドクス"],
  ["月刊ブリガン"],
  ['&#x1f4a5;', "女騎士の思念7", "白騎士の思念7"],
  ["高台"],
  ['&#x1f4a5;', "ハートハンターBC10", "ハートハンターFW10"],
  ["The Sign2部"],
  ["タートルアイランド"],
  ["飛行船　第2部"],
  ['&#x1f4a5;', "アムダライス"],
  ["デワタの伝統酒"],
  ["Lv175を達成する", "その他"],
  ["アルベルタの少年"],
  ["七王家とユミルの心臓"],
  ['&#x1f4a5;', "不死のウィンドゴースト", "不死の呪われた騎士", "不死のゾンビ50"],
  ['&#x1f4a5;', "白色のベアドール5", "赤色のベアドール5"],
  ["レッケンベル運送"],
  ["ファンタスマゴリカ"],
  ['&#x1f4a5;', "怨恨の兵士10", "怨恨の弓兵10"],
  ['&#x1f4a5;', "真化カトリーヌ(上級)", "真化マーガレッタ(上級)"],
  ["村長の剣"],
  ["運命のカラス"],
  ['&#x1f4e6;', "乾いた砂50", "龍の歯50"],
  ["会議のおとも"],
  ['&#x1f4a5;', "大長老アイリン"],
  ["新任看護師と病院"],
  ["恋人"],
  ['&#x1f4a5;', "レッドクリスタル7", "ブルークリスタル7"],
  ["フローズンメモリー"],
  ['&#x1f4a5;', "トップラウンドライダー5", "トップサイドライダー5", "トップブレードライダー5"],
  ["大統領　第1部"]
],
[
  ["レゲンシュルム研究所"],
  ["フレイムヴァレーへの道"],
  ["エルディカスティス"],
  ['&#x1f4a5;', "ビジョウ"],
  ["紫色の竜"],
  ['&#x1f4a5;', "無名のマーチャント"],
  ['&#x1f4e6;', "堅く固まった泥15", "古のウータンファイターの毛15"],
  ["楽園団登録"],
  ['&#x1f4a5;', "ハートハンター警備兵10"],
  ['&#x1f4e6;', "極楽鳥の羽50", "デワタドラゴンの皮50"],
  ["ビフロスト"],
  ['&#x1f4a5;', "ツイン・カプトゥ（CP）7"],
  ["双子の真実"],
  ["マヌクのモンスター討伐"],
  ["二つの種族"],
  ["魔術"],
  ["バルター家の調査"],
  ['&#x1f4a5;', "硬化ラーヴァゴーレム5", "硬化ナイトメアテラー5"],
  ['&#x1f4a5;', "タフィー15", "フローズンウルフ15"],
  ["レッケンベル社の噂"],
  ['&#x1f4a5;', "モルス・ネクロマンサー", "モルス・魔導士"],
  ["トイレのオバケ"],
  ['&#x1f4a5;', "セリーヌ・キミ"],
  ["ウィグナー家の心の箱"],
  ["The Sign3部"],
  ["友達のために"],
  ["大神官"],
  ['&#x1f4a5;', "ドロール（CP）7"],
  ["ルワンダに伝える話"],
  ["テラグローリア"],
  ["守護者"],
  ["トール火山の秘密"],
  ['&#x1f4a5;', "ダークフェイスワーム3"],
  ["隠された財宝"],
  ['&#x1f4a5;', "ハートハンター・ベラレ（CP）7"],
  ["至極の宴会料理"],
  ["ガラナ"],
  ['&#x1f4e6;', "魂が宿った宝石25", "雪玉25"],
  ['&#x1f4a5;', "魔神の使徒・アハト", "魔神の使徒・シナイム"],
  ["Lv180を達成する", "その他"],
  ["猫耳と尻尾の男"],
  ['&#x1f4a5;', "不吉なアサルトタートル5", "不吉なPタートル5"],
  ['&#x1f4a5;', "死神アンク"],
  ["不運のエメラルド"],
  ['&#x1f4a5;', "セリア=アルデ(三次職)5", "エミュール=プラメール(三次職)5"],
  ["三ヶ国への報告書"],
  ["言語習得"],
  ['&#x1f4e6;', "ドケビの角50", "ハーピーの羽50"],
  ["モーラの温泉調査"]
],
[
  ["不吉な噂"],
  ['&#x1f4a5;', "イーブル"],
  ["美しさの代償"],
  ["魔法使いのノート"],
  ["黒い石"],
  ["悠久なる絆"],
  ['&#x1f4a5;', "ターキーペコ15"],
  ['&#x1f4a5;', "サンタオーク10", "サンタポリン10"],
  ["Lv185を達成する", "その他"],
  ["スパイ疑惑"],
  ["隊長の贖罪"],
  ["イルシオン"],
  ['&#x1f4a5;', "スウィートナイトメア5", "マットドレインリアー5"],
  ["エクラージュの王"],
  ["パトリックを探して"],
  ['&#x1f4a5;', "汚染されたレイドリック5", "汚染されたスティング5"],
  ['&#x1f4e6;', "ひとくちケーキ25", "よく焼いたクッキー25"],
  ['&#x1f4a5;', "クリスマスクッキー10", "ミストケース10"],
  ['&#x1f4a5;', "EL-A17T"],
  ["婚約者探し"],
  ['&#x1f4e6;', "短い蝙蝠の毛15", "悪夢の塊15"],
  ['&#x1f4a5;', "S・J・アーネストウルフ"],
  ["聖域の秘密"],
  ['&#x1f4a5;', "アンソニ5"],
  ["メモリアルダンジョン　試練の迷宮", "メモリアルダンジョン　封印の迷宮", "のいずれかをクリアする", "その他"],
  ["地元騎士団～霧の森～"],
  ['&#x1f4e6;', "黒い魂の欠片15", "古い甲羅25"],
  ['&#x1f4a5;', "呪いを呑み込んだ王"],
  ['&#x1f4e6;', "ババヤガのきね50", "歌う草10"],
  ["冒険者達との出会い"],
  ['&#x1f4a5;', "セイレン=ウィンザー(三次職)5", "マーガレッタ=ソリン(三次職)5"],
  ['&#x1f4a5;', "サンタスモーキー10", "靴下スモーキー10"],
  ['&#x1f4e6;', "穴が開いている赤い靴下10", "プレゼントボックス10"],
  ["思い出の木"],
  ["修道院(名もなき島入場)"],
  ["ロペの捜索"],
  ['&#x1f4e6;', "偽装缶詰30"],
  ["森の中の秘密"],
  ['&#x1f4a5;', "古のメガリス5", "古のフレイムシューター5"],
  ["料理作成"],
  ['&#x1f4e6;', "ジェジェゼロピー40", "清楚な花40"],
  ["名前はアサヒ"],
  ['&#x1f4a5;', "Y.S.F.0.1セイレン"],
  ["陽居村の幽霊少女"],
  ['&#x1f4e6;', "虹色のゼリーの欠片60", "謎の樹液60"],
  ["大統領　第2部"],
  ["塔の中の冒険者"],
  ['&#x1f4a5;', "ジャッククリスマス10", "クリスマスゴブリン10"],
  ['&#x1f4a5;', "T_W_O"]
]]

var structedTable = ''
var remainQuests = []
var checkedQuests = []
var lastFetchDate = Date.now()

function buildTabInner() {
  structedTable = ''
  remainQuests = []
  checkedQuests = []
  var tabInner = '<tr><th class="partsHeading" colspan="3" name="poringbingo"><b>18th Anniv. ポリンビンゴ</b> <span name="fetchingWorld">データ取得は右上の拡張機能アイコンから</span></th></tr>' + `
    <tr>
      <td colspan="3">
        v1.3.0 - 拡張機能のオプションメニューにクエストチェック表を追加しました。ご活用ください。<br/>
        v1.2.2 - <a href="https://yapparo.net/blog?post=28" target="_blank" rel="noopener noreferrer">一部の古いクエストはエイドに報告しないとSNSに完了反映されません</a><br/>
        ※<a href="https://www.google.com/search?q=%E7%87%83%E6%96%99%E8%A3%9C%E7%B5%A6+%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88+ro" target="_blank" rel="noopener noreferrer">燃料補給</a>, <a href="https://www.google.com/search?q=%E6%A5%BD%E5%9C%92%E5%9B%A3%E7%99%BB%E9%8C%B2+%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88+ro" target="_blank" rel="noopener noreferrer">楽園団登録</a>, <a href="https://www.google.com/search?q=%E6%9C%88%E5%88%8A%E3%83%96%E3%83%AA%E3%82%AC%E3%83%B3+%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88+ro" target="_blank" rel="noopener noreferrer">月刊ブリガン</a>, <a href="https://www.google.com/search?q=%E5%90%8D%E5%89%8D%E3%81%AF%E3%82%A2%E3%82%B5%E3%83%92+%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88+ro" target="_blank" rel="noopener noreferrer">名前はアサヒ</a>の4クエストはROSNSで確認できません。
      </td>
    </tr>
    <tr>
      <td colspan="3">
        参照中のシート - <span name="selectedSheet" style="font-weight: bold;"></span>（チェックシートの変更は右上の拡張機能アイコンから）
      </td>
    </tr>
    <tr>
      <td colspan="3">
        <details name="remainQuests">
          <summary>
            未達成クエスト一覧（データ取得後に生成されます）
          </summary>
        </details>
      </td>
    </tr>
  `
  remainQuests.push('The Sign')
  annivQuestList.forEach((questName, index) => {
    if (index == 0) { tabInner += '<tr><th colspan="3"><b>ポリンビンゴ１</b>　+10ガチャ　<a href="https://twitter.com/hashtag/RO18%E5%91%A8%E5%B9%B4%E3%83%97%E3%83%A9%E3%82%B910%E3%82%AC%E3%83%81%E3%83%A3%E7%B5%90%E6%9E%9C?f=live" target="_blank" rel="noopener noreferrer">Twitterのガチャ結果タグを開く</a></th></tr>' }
    if (index == 27) { tabInner += '<tr><th colspan="3"><b>ポリンビンゴ２</b>　Zenyガチャ　<a href="https://twitter.com/hashtag/RO18%E5%91%A8%E5%B9%B4Zeny%E3%82%AC%E3%83%81%E3%83%A3%E7%B5%90%E6%9E%9C?f=live" target="_blank" rel="noopener noreferrer">Twitterのガチャ結果タグを開く</a></th></tr>' }
    if (index == 54) { tabInner += '<tr><th colspan="3"><b>ポリンビンゴ３</b>　フルエンチャントガチャ　<a href="https://twitter.com/hashtag/RO18%E5%91%A8%E5%B9%B4%E3%83%95%E3%83%AB%E3%82%A8%E3%83%B3%E3%83%81%E3%83%A3%E3%83%B3%E3%83%88%E3%82%AC%E3%83%81%E3%83%A3%E7%B5%90%E6%9E%9C?f=live" target="_blank" rel="noopener noreferrer">Twitterのガチャ結果タグを開く</a></th></tr>' }
    if (index == 84) { tabInner += '<tr><th colspan="3"><b>ポリンビンゴ４</b>　MVPカードガチャ　<a href="https://twitter.com/hashtag/RO18%E5%91%A8%E5%B9%B4MVP%E3%82%AB%E3%83%BC%E3%83%89%E3%82%AC%E3%83%81%E3%83%A3%E7%B5%90%E6%9E%9C?f=live" target="_blank" rel="noopener noreferrer">Twitterのガチャ結果タグを開く</a></th></tr>' }
    if (index % 3 === 0) {
      tabInner += '<tr>'
    }
    var chompedQuestName = questName.replace(/No\. ?[0-9]+ /, '').replace(/ign[0-9]+部/, 'ign')
    if (chompedQuestName.length > 0 && chompedQuestName !== 'The Sign') { remainQuests.push(chompedQuestName) }
    var searchUrl = questNameToSearchUrl(chompedQuestName)
    tabInner += '<td id="' + chompedQuestName + '"><a href="' + searchUrl + '" target="_blank" rel="noopener noreferrer">' + questName + '</a></td>'
    if (index % 3 === 2) {
      tabInner += '</tr>'
    }
  })
  tabInner += `
    <tr>
      <th colspan="3">
        <b>夏美のお願い　※順番はこの通りとはならない可能性があります</b>
      </th>
    </tr>
  `
  natsumiMD.forEach((questName, index) => {
    if (index % 3 === 0) {
      tabInner += '<tr>'
    }
    if (index % 3 !== 0 && questName.length > 0) {
      var searchUrl = questNameToSearchUrl(questName)
      tabInner += '<td id="' + questName.replace(/No\. ?[0-9]+ /, '').replace(/ign[0-9]+部/, 'ign') + '"><a href="' + searchUrl + '" target="_blank" rel="noopener noreferrer">' + questName + '</a></td>'
    } else {
      tabInner += '<td>' + questName + '</td>'
    }
    if (index % 3 === 2) {
      tabInner += '</tr>'
    }
  })
  tabInner += `
    <tr>
      <td colspan="3">
        制限レベルが書いていないダンジョンも、概ねLv100以上にはする必要があります。<br/>
        ※1 「守護者」クエストはニーズヘッグの撃破報告で完了するクエストであり、入れる人も守護者クエストはクリアしていない場合があります。正確な入場条件を確認してください。<br/>
        ※2 別途「レッケンベル社の噂」クエストを少し進める必要があります。
      </td>
    </tr>
  `
  return tabInner
}

function setupBingoInformation(callback) {
  lastFetchDate = Date.now()
  var firstTable = document.querySelector("div.dparts table")
  if (firstTable.innerHTML.includes('①ワールド選択')) {
    var bingoTable = document.querySelector("table#bingoTable")
    if (bingoTable) {
      var tabInner = buildTabInner()
      bingoTable.innerHTML = tabInner
    } else {
      var newTable = document.createElement('table')
      newTable.id = 'bingoTable'
      var tabInner = buildTabInner()
      newTable.innerHTML = tabInner
      firstTable.after(newTable)
    }
    checkMain(callback)
  }
}
function questNameToSearchUrl(name) {
  var nakedName = name.replace(/No\. ?[0-9]+ /, '').replace(/ign[0-9]+部/, 'ign')
  var googleUrl = 'https://www.google.com/search?q=' + nakedName + '+クエスト+ro'
  if (nakedName === '魔術') { googleUrl += '+プロンテラ' }
  return encodeURI(googleUrl)
}

var slotNames = Array.from(Array(7), (v, k) => 'slotName' + k)
var checkMarkNames = [
  ...Array.from(Array(49), (v, k) => 'bingoOneCheck' + k),
  ...Array.from(Array(49), (v, k) => 'bingoTwoCheck' + k),
  ...Array.from(Array(49), (v, k) => 'bingoThreeCheck' + k),
  ...Array.from(Array(49), (v, k) => 'bingoFourCheck' + k)
]
setupBingoInformation(null)
function checkMain(callback) {
  chrome.storage.sync.get(
    [
      ...checkMarkNames,
      'noInfoChecked',
      'slot',
      ...slotNames
    ], function (items) {
      var slot = items.slot ? Number(items.slot) : 0
      var sheetInfo = document.querySelector("span[name='selectedSheet']")
      sheetInfo.innerHTML = items[slotNames[slot]] ? items[slotNames[slot]] : 'Slot ' + (slot + 1) + ': 名称未設定'
      checkMarkNames.forEach(ke => {
        var table = 0
        var row = 13
        var keSlice = ke.slice(0, 8)
        switch (keSlice) {
          case 'bingoOne':
            table = 0
            row = 13
            break
          case 'bingoTwo':
            table = 1
            row = 13
            break
          case 'bingoThr':
            table = 2
            row = 15
            break
          case 'bingoFou':
            table = 3
            row = 14
            break
          default:
        }
        var checked = convertB(items[ke]).slice(slot, slot + 1) === 't'
        if (ke !== 'noInfoChecked' && checked) {
          var queInfo = bingos[table][Number(ke.slice(row))]
          if (queInfo.length === 1) {
            var queName = queInfo[0]
            checkedQuests.push(queName)
            var query = `td#${CSS.escape(queName)}`
            if (queName.startsWith('The Sign')) {
              var boxes = document.querySelectorAll(`td#${CSS.escape('The Sign')}`)
              boxes.forEach(box => {
                if (box.innerHTML.includes(queName)) {
                  if (items.noInfoChecked) { box.id = '' }
                  box.innerHTML += '&#x2705;'
                }
              })
            } else {
              var boxes = document.querySelectorAll(query)
              boxes.forEach((box, index) => {
                if (items.noInfoChecked && index === 0) { box.id = '' }
                box.innerHTML += '&#x2705;'
              })
            }
          }
        }
      })
      if (callback) { callback() }
    })
}

function convertB(value) {
  var initialValue = 'fffffff'
  switch (value) {
    case true:
      initialValue = 'tffffff'
      break
    case false:
    case undefined:
      break
    default:
      initialValue = value
  }
  return initialValue
}
