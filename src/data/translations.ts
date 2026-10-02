export type Language = 'EN' | 'AR' | 'ZH' | 'JA' | 'KO';

export interface Translations {
  name: string;
  flag: string;
  heroTitle: string;
  editionSubtitle: string;
  established: string;
  viewCollection: string;
  backToTop: string;
  home: string;
  collection: string;
  description: string;
  specifications: string;
  requestSample: string;
  shareSuccess: string;
  searchPlaceholder: string;
  allRegions: string;
  altitude: string;
  process: string;
  variety: string;
  cuppingScore: string;
  harvest: string;
  station: string;
  exclusiveLot: string;
  inquireLot: string;
  prevLot: string;
  nextLot: string;
  isRtl?: boolean;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  EN: {
    name: "English",
    flag: "🇬🇧",
    heroTitle: "The Alchemy coffee collection Edition 1",
    editionSubtitle: "Exclusive Ethiopian Micro Lot Masterpieces",
    established: "EST. 2010 • ETHIOPIA",
    viewCollection: "View Collection",
    backToTop: "BACK TO TOP",
    home: "HOME",
    collection: "COLLECTION",
    description: "DESCRIPTION",
    specifications: "MICRO LOT SPECIFICATIONS",
    requestSample: "Request Cupping Sample",
    shareSuccess: "Lot link copied to clipboard",
    searchPlaceholder: "Search by lot code, name, or note...",
    allRegions: "All Origins",
    altitude: "Elevation",
    process: "Processing",
    variety: "Varietal",
    cuppingScore: "Cupping Score",
    harvest: "Harvest Season",
    station: "Processing Station",
    exclusiveLot: "THE ALCHEMY COLLECTION",
    inquireLot: "Inquire About This Lot",
    prevLot: "Previous Lot",
    nextLot: "Next Lot"
  },
  AR: {
    name: "العربية",
    flag: "🇸🇦",
    heroTitle: "The Alchemy coffee collection Edition 1",
    editionSubtitle: "روائع محاصيل البن الإثيوبي الحصرية الفاخرة",
    established: "تأسست ٢٠١٠ • إثيوبيا",
    viewCollection: "استكشف المجموعة",
    backToTop: "العودة إلى الأعلى",
    home: "الرئيسية",
    collection: "المجموعة",
    description: "الوصف الحسي",
    specifications: "مواصفات المحصول الدقيقة",
    requestSample: "طلب عينة تذوق",
    shareSuccess: "تم نسخ الرابط إلى الحافظة",
    searchPlaceholder: "ابحث بالرمز، الاسم أو النكهات...",
    allRegions: "جميع المناطق",
    altitude: "الارتفاع",
    process: "المعالجة",
    variety: "السلالة",
    cuppingScore: "تقييم التذوق",
    harvest: "موسم الحصاد",
    station: "محطة المعالجة",
    exclusiveLot: "مجموعة ألكيمي الحصرية",
    inquireLot: "استفسر عن هذا المحصول",
    prevLot: "المحصول السابق",
    nextLot: "المحصول التالي",
    isRtl: true
  },
  ZH: {
    name: "中文",
    flag: "🇨🇳",
    heroTitle: "The Alchemy coffee collection Edition 1",
    editionSubtitle: "埃塞俄比亚专属精选微批次典藏",
    established: "始于 2010 • 埃塞俄比亚",
    viewCollection: "查看臻选系列",
    backToTop: "返回顶部",
    home: "首页",
    collection: "臻选系列",
    description: "风味描述",
    specifications: "微批次详细规格",
    requestSample: "索取杯测样品",
    shareSuccess: "批次链接已复制到剪贴板",
    searchPlaceholder: "按批次编号、名称或风味搜索...",
    allRegions: "所有产区",
    altitude: "海拔高度",
    process: "精制处理法",
    variety: "咖啡品种",
    cuppingScore: "杯测得分",
    harvest: "采收产季",
    station: "处理水洗厂",
    exclusiveLot: "炼金术典藏系列",
    inquireLot: "咨询该批次",
    prevLot: "上一批次",
    nextLot: "下一批次"
  },
  JA: {
    name: "日本語",
    flag: "🇯🇵",
    heroTitle: "The Alchemy coffee collection Edition 1",
    editionSubtitle: "エチオピア厳選マイクロロット最高峰",
    established: "設立 2010 • エチオピア",
    viewCollection: "コレクションを見る",
    backToTop: "トップへ戻る",
    home: "ホーム",
    collection: "コレクション",
    description: "風味解説",
    specifications: "マイクロロット仕様",
    requestSample: "カッピングサンプル請求",
    shareSuccess: "リンクをクリップボードにコピーしました",
    searchPlaceholder: "ロットコード、名称、風味で検索...",
    allRegions: "全産地",
    altitude: "標高",
    process: "精製方法",
    variety: "品種",
    cuppingScore: "カッピングスコア",
    harvest: "収穫期",
    station: "精製所",
    exclusiveLot: "アルケミー コレクション",
    inquireLot: "このロットについて問い合わせる",
    prevLot: "前のロット",
    nextLot: "次のロット"
  },
  KO: {
    name: "한국어",
    flag: "🇰🇷",
    heroTitle: "The Alchemy coffee collection Edition 1",
    editionSubtitle: "에티오피아 최고 등급 익스클루시브 마이크로 랏",
    established: "EST. 2010 • 에티오피아",
    viewCollection: "컬렉션 보기",
    backToTop: "맨 위로 이동",
    home: "홈",
    collection: "컬렉션",
    description: "테이스팅 노트 & 설명",
    specifications: "마이크로 랏 스펙",
    requestSample: "커핑 샘플 요청",
    shareSuccess: "링크가 클립보드에 복사되었습니다",
    searchPlaceholder: "랏 코드, 이름, 테이스팅 노트 검색...",
    allRegions: "전체 산지",
    altitude: "재배 고도",
    process: "가공 방식",
    variety: "품종",
    cuppingScore: "커핑 스코어",
    harvest: "수확 시즌",
    station: "가공소",
    exclusiveLot: "알케미 컬렉션",
    inquireLot: "이 랏 문의하기",
    prevLot: "이전 랏",
    nextLot: "다음 랏"
  }
};
