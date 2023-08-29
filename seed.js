const db = require('./models/_run')
const createEntity = require('./utils')
const sequelize = require('./configs/database')

// const defaultUser
const categorySeed = () =>{
    const defaultCategories = [
        { Name : "Perfume"},
        { Name : "Clothes"},
        { Name : "Shoes"},
        { Name : "Others"},
    ]
    defaultCategories.forEach((data)=>{
        createEntity(db.Category, data, "Name");
    });
}


const accordSeed = () => {
    const defaultAccords = [
        { Name : "Amber", Kor: "앰버"},
        { Name : "Animalic", Kor: "동물적인"},
        { Name : "Aquatic", Kor: "아쿠아틱"},
        { Name : "Aromatic", Kor: "아로마틱"},
        { Name : "Balsamic", Kor: "발삼"},
        { Name : "Citrus", Kor: "시트러스"},
        { Name : "Floral", Kor: "플로럴"},
        { Name : "Fruity", Kor: "과일"},
        { Name : "Green", Kor: "그린"},
        { Name : "Oriental", Kor: "오리엔탈"},
        { Name : "Spicy", Kor: "스파이시"},
        { Name : "Woody", Kor: "우디"},
        { Name : "Powdery", Kor: "파우더리"},
        { Name : "Sweet", Kor: "스위트"},
        { Name : "Vanilla", Kor: "바닐라"},
        { Name : "White Floral", Kor: "화이트 플로럴"},
        { Name : "tobacco", Kor: "타바코"},
    ]

    defaultAccords.forEach((data)=> {
        createEntity(db.Accord, data, "Name")
    })
}
const noteSeed = async() => {

    const initialData = [
        {
            type: "Citrus",
            data: [        
                { Name : "Bergamot", Kor : "버가못" },
                { Name : "Bigarade", Kor : "비가라드" },
                { Name : "Bitter Orange", Kor : "쓴 오렌지" },
                { Name : "Blood Orange", Kor : "블러드 오렌지" },
                { Name : "Calamansi", Kor : "칼라만시" },
                { Name : "Chen Pi", Kor : "천피" },
                { Name : "Chinotto", Kor : "키노토" },
                { Name : "Citron", Kor : "시트론" },
                { Name : "Citrus Water", Kor : "시트러스 워터" },
                { Name : "Citruses", Kor : "시트러스" },
                { Name : "Clementine", Kor : "클레멘타인" },
                { Name : "Finger Lime", Kor : "핑거 라임" },
                { Name : "Grapefruit", Kor : "자몽" },
                { Name : "Grapefruit Leaf", Kor : "자몽 잎" },
                { Name : "Grapefruit Peel", Kor : "자몽 껍질" },
                { Name : "Green Tangerine", Kor : "청귤" },
                { Name : "Hassaku", Kor : "하사쿠" },
                { Name : "Hatkora Lemon", Kor : "하트코라 레몬" },
                { Name : "Kaffir Lime", Kor : "카피어 라임" },
                { Name : "Kumquat", Kor : "금귤" },
                { Name : "Lemon", Kor : "레몬" },
                { Name : "Lemon Balm", Kor : "레몬밤" },
                { Name : "Lemon Tree", Kor : "레몬 나무" },
                { Name : "Lemon Verbena", Kor : "레몬 버베나" },
                { Name : "Lemon Zest", Kor : "레몬 껍질" },
                { Name : "Lemongrass", Kor : "레몬그라스" },
                { Name : "Lime", Kor : "라임" },
                { Name : "Limetta", Kor : "리메타" },
                { Name : "Litsea Cubeba", Kor : "리체아 큐베바" },
                { Name : "Mandarin Orange", Kor : "귤" },
                { Name : "Mandora", Kor : "만도라" },
                { Name : "Methyl Pamplemousse", Kor : "메틸 팜플무스" },
                { Name : "Neroli", Kor : "네로리" },
                { Name : "Orange", Kor : "오렌지" },
                { Name : "Palestinian Sweet Lime", Kor : "팔레스타인 스위트 라임" },
                { Name : "Petitgrain", Kor : "페티그레인" },
                { Name : "Pokan", Kor : "포칸" },
                { Name : "Pomelo", Kor : "자두" },
                { Name : "Shiikuwasha", Kor : "시이쿠와샤" },
                { Name : "Tangelo", Kor : "탄젤로" },
                { Name : "Tangerine", Kor : "탕겨린" },
                { Name : "Tangerine Zest", Kor : "탕겨린 껍질" },
                { Name : "Yuzu", Kor : "유자" }
            ]
        },
        {
            type: "Fruity",
            data: [
                { Name : "Acai Berry", Kor : "아사이 베리" },
                { Name : "Acerola", Kor : "아세롤라" },
                { Name : "Acai Berry", Kor : "아사이 베리" },
                { Name : "Acerola", Kor : "아세로라" },
                { Name : "Acorn", Kor : "도토리" },
                { Name : "Almond", Kor : "아몬드" },
                { Name : "Apple", Kor : "사과" },
                { Name : "Apple Juice", Kor : "사과 주스" },
                { Name : "Apple Pulp", Kor : "사과 펄프" },
                { Name : "Apple Sherbet", Kor : "사과 셔벗" },
                { Name : "Apricot", Kor : "살구" },
                { Name : "Arctic Bramble", Kor : "북극 브램블" },
                { Name : "Argan", Kor : "아르간" },
                { Name : "Artichoke", Kor : "아티초크" },
                { Name : "Banana", Kor : "바나나" },
                { Name : "Barberry", Kor : "바베리" },
                { Name : "Bearberry", Kor : "베어베리" },
                { Name : "Beetroot", Kor : "비트루트" },
                { Name : "Black Currant", Kor : "블랙 커런트" },
                { Name : "Black Walnut", Kor : "블랙 월넛" },
                { Name : "Blackberry", Kor : "블랙베리" },
                { Name : "Blackthorn", Kor : "블랙쏜" },
                { Name : "Blueberry", Kor : "블루베리" },
                { Name : "Boysenberry", Kor : "보이젠베리" },
                { Name : "Brazil Nut", Kor : "브라질 넛" },
                { Name : "Breadnut", Kor : "빵넛" },
                { Name : "Buriti", Kor : "부리티" },
                { Name : "Burning Cherry", Kor : "번짐 체리" },
                { Name : "Candlenut", Kor : "캔들넛" },
                { Name : "Cantaloupe", Kor : "칸탈루프" },
                { Name : "Carambola (Star Fruit)", Kor : "카람볼라 (스타 프룻)" },
                { Name : "Carrot", Kor : "당근" },
                { Name : "Cashew", Kor : "카슈" },
                { Name : "Cassowary Fruit", Kor : "카소와리 프룻" },
                { Name : "Cauliflower", Kor : "콜리플라워" },
                { Name : "Cepes", Kor : "세프" },
                { Name : "Chayote", Kor : "차요테" },
                { Name : "Cherimoya", Kor : "체리모야" },
                { Name : "Cherry", Kor : "체리" },
                { Name : "Chestnut", Kor : "밤" },
                { Name : "Chia Seed", Kor : "치아 씨드" },
                { Name : "Chickpeas", Kor : "치크피" },
                { Name : "Chinese Magnolia", Kor : "중국 목련" },
                { Name : "Cloudberry", Kor : "클라우드베리" },
                { Name : "Coco De Mer", Kor : "코코 드 메르" },
                { Name : "Coconut", Kor : "코코넛" },
                { Name : "Coconut Water", Kor : "코코넛 워터" },
                { Name : "Conifer", Kor : "침엽수" },
                { Name : "Corn", Kor : "옥수수" },
                { Name : "Corn Silk", Kor : "옥수수 실크" },
                { Name : "Count's Fruit", Kor : "카운트의 과일" },
                { Name : "Cranberry", Kor : "크랜베리" },
                { Name : "Cucumber", Kor : "오이" },
                { Name : "Currant Leaf and Bud", Kor : "커런트 잎과 싹" },
                { Name : "Cyperus Scariosus", Kor : "시페루스 스카리오수스" },
                { Name : "Daikon Radish", Kor : "대파무" },
                { Name : "Dark Plum Wu Mei", Kor : "어두운 자두 우 메이" },
                { Name : "Dewberry", Kor : "듀베리" },
                { Name : "Dried Apple Crisp", Kor : "말린 사과 크리스프" },
                { Name : "Dried Apricot", Kor : "말린 살구" },
                { Name : "Dried Fruits", Kor : "말린 과일" },
                { Name : "Durian", Kor : "두리안" },
                { Name : "Elderberry", Kor : "엘더베리" },
                { Name : "Feijoa Fruit", Kor : "페이조아 과일" },
                { Name : "Fig", Kor : "무화과" },
                { Name : "Fig Leaf", Kor : "무화과 잎" },
                { Name : "Forest Fruits", Kor : "숲의 과일" },
                { Name : "Frosted Berries", Kor : "서리 낀 베리" },
                { Name : "Fruit Salad", Kor : "과일 샐러드" },
                { Name : "Fruity Notes", Kor : "과일 노트" },
                { Name : "Gariguette Strawberry", Kor : "가리게트 딸기" },
                { Name : "Genipapo", Kor : "제니파포" },
                { Name : "Goji Berries", Kor : "고지 베리" },
                { Name : "Gooseberry", Kor : "구스베리" },
                { Name : "Grains", Kor : "곡물" },
                { Name : "Grape Seed", Kor : "포도 씨앗" },
                { Name : "Grapes", Kor : "포도" },
                { Name : "Green Anjou Pears", Kor : "그린 앙주 배" },
                { Name : "Green Grape", Kor : "청포도" },
                { Name : "Green Pear", Kor : "청배" },
                { Name : "Green Plum", Kor : "청매실" },
                { Name : "Greengage", Kor : "그린게이지" },
                { Name : "Ground Cherry", Kor : "땅 체리" },
                { Name : "Guarana", Kor : "과라나" },
                { Name : "Guava", Kor : "구아바" },
                { Name : "Hazelnut", Kor : "헤이즐넛" },
                { Name : "Jabuticaba", Kor : "자부티카바" },
                { Name : "Jackfruit", Kor : "잭후르츠" },
                { Name : "Japanese Loquat", Kor : "일본 비야" },
                { Name : "Jobs Tears (Yi Yi Ren)", Kor : "작약수 (이이런)" },
                { Name : "Kiwi", Kor : "키위" },
                { Name : "Kumbaru", Kor : "쿰바루" },
                { Name : "Lingonberry", Kor : "린곤베리" },
                { Name : "Litchi", Kor : "리치" },
                { Name : "Loganberry", Kor : "로간베리" },
                { Name : "Longan Berries", Kor : "롱안 베리" },
                { Name : "Macadamia", Kor : "마카다미아" },
                { Name : "Mahonia", Kor : "마호니아" },
                { Name : "Malt", Kor : "말트" },
                { Name : "Mango", Kor : "망고" },
                { Name : "Mangosteen", Kor : "망고스틴" },
                { Name : "Maninka", Kor : "마닌카" },
                { Name : "Marian Plum", Kor : "마리안 플럼" },
                { Name : "Medlar", Kor : "메들러" },
                { Name : "Melon", Kor : "멜론" },
                { Name : "Mirabelle", Kor : "미라벨" },
                { Name : "Moepel Accord", Kor : "모에펠 어코드" },
                { Name : "Mulberry", Kor : "뽕나무" },
                { Name : "Mushroom", Kor : "버섯" },
                { Name : "Nashi Pear", Kor : "나시 배" },
                { Name : "Nectarine", Kor : "넥타린" },
                { Name : "Nutty Notes", Kor : "너트 노트" },
                { Name : "Okra Seeds", Kor : "오크라 씨앗" },
                { Name : "Olive", Kor : "올리브" },
                { Name : "Papaya", Kor : "파파야" },
                { Name : "Passionfruit", Kor : "패션후르츠" },
                { Name : "Pea", Kor : "완두콩" },
                { Name : "Peach", Kor : "복숭아" },
                { Name : "Peanut", Kor : "땅콩" },
                { Name : "Pear", Kor : "배" },
                { Name : "Pecan", Kor : "피칸" },
                { Name : "Persimmon", Kor : "감" },
                { Name : "Peruvian Pepper", Kor : "페루 후추" },
                { Name : "Pineapple", Kor : "파인애플" },
                { Name : "Pinot Noir Grapes", Kor : "피노 누아르 포도" },
                { Name : "Pistachio", Kor : "피스타치오" },
                { Name : "Pitahaya", Kor : "피타하야" },
                { Name : "Pitanga", Kor : "피탕가" },
                { Name : "Plum", Kor : "자두" },
                { Name : "Pomegranate", Kor : "석류" },
                { Name : "Potato", Kor : "감자" },
                { Name : "Prickly Pear", Kor : "선인장 배" },
                { Name : "Pumpkin", Kor : "호박" },
                { Name : "Quince", Kor : "모과" },
                { Name : "Rambutan", Kor : "람부탄" },
                { Name : "Raspberry", Kor : "라즈베리" },
                { Name : "Red Apple", Kor : "빨간 사과" },
                { Name : "Red Berries", Kor : "빨간 베리" },
                { Name : "Red Currant", Kor : "빨간 레드 커런트" },
                { Name : "Red Fruits", Kor : "빨간 과일" },
                { Name : "Red Fruits Smoothie", Kor : "빨간 과일 스무디" },
                { Name : "Red Mulberry", Kor : "빨간 뽕나무" },
                { Name : "Rhubarb", Kor : "루바브" },
                { Name : "Roasted Nuts", Kor : "로스팅 너트" },
                { Name : "Sapodilla", Kor : "사포딜라" },
                { Name : "Sarsaparilla", Kor : "삿파릴라" },
                { Name : "Sea Buckthorn", Kor : "바다 자리공" },
                { Name : "Seriguela", Kor : "세리구엘라" },
                { Name : "Shea Butter", Kor : "시어 버터" },
                { Name : "Shea Nuts", Kor : "시어 너트" },
                { Name : "Silverberry", Kor : "실버베리" },
                { Name : "Snowberry", Kor : "스노우베리" },
                { Name : "Sour Cherry", Kor : "산 체리" },
                { Name : "Soursop", Kor : "사우어 솝" },
                { Name : "Soybean", Kor : "대두" },
                { Name : "Squash", Kor : "스쿼시" },
                { Name : "Star Apple", Kor : "별 사과" },
                { Name : "Strawberry", Kor : "딸기" },
                { Name : "Tayberry", Kor : "테이베리" },
                { Name : "Tomato", Kor : "토마토" },
                { Name : "Tropical Fruits", Kor : "열대 과일" },
                { Name : "Umbu-Cajá | Taperebá", Kor : "움부-카자 | 타페레바" },
                { Name : "Walnut", Kor : "호두" },
                { Name : "Walnut Milk", Kor : "호두 우유" },
                { Name : "Water Fruit", Kor : "물 과일" },
                { Name : "Watermelon", Kor : "수박" },
                { Name : "Wattleseed", Kor : "와틀씨" },
                { Name : "White Currant", Kor : "하얀 커런트" },
                { Name : "Wild Strawberry", Kor : "야생 딸기" },
                { Name : "Winterberry", Kor : "겨울 베리" },
                { Name : "Wolfberry", Kor : "늑대 딸기" },
                { Name : "Yellow Cherry", Kor : "노란 체리" },
                { Name : "Yellow Fruits", Kor : "노란 과일" },
                { Name : "Yuca Cassava", Kor : "유카 카사바" },
                { Name : "Yumberry", Kor : "윔베리" }
            ]
        },
        {
            type: "Floral",
            data: [
                { "Name": "Acacia", "Kor": "아카시아" },
                { "Name": "Acerola Blossom", "Kor": "아세로라 꽃" },
                { "Name": "Aglaia", "Kor": "아글라이아" },
                { "Name": "Albizia", "Kor": "알비지아" },
                { "Name": "Almond Blossom", "Kor": "아몬드 꽃" },
                { "Name": "Alstroemeria", "Kor": "알스트로메리아" },
                { "Name": "Althaea", "Kor": "알쓰리아" },
                { "Name": "Alumroot", "Kor": "알룸루트" },
                { "Name": "Alyssum", "Kor": "알리섬" },
                { "Name": "Amarillys", "Kor": "아마릴리스" },
                { "Name": "Amazon Moonflower", "Kor": "아마존 문플라워" },
                { "Name": "Anemone", "Kor": "아네모네" },
                { "Name": "Angel's Trumpet", "Kor": "천사의 나팔" },
                { "Name": "Apple Blossom", "Kor": "사과 꽃" },
                { "Name": "Apricot Blossom", "Kor": "살구 꽃" },
                { "Name": "Ashoka Flower", "Kor": "아쇼카 꽃" },
                { "Name": "Astragalus", "Kor": "아스트라갈루스" },
                { "Name": "Azalea", "Kor": "진달래" },
                { "Name": "Azteca Lily", "Kor": "아즈텍 릴리" },
                { "Name": "Banana Flower", "Kor": "바나나 꽃" },
                { "Name": "Banksia Australian", "Kor": "뱅크시아 호주" },
                { "Name": "Begonia", "Kor": "베고니아" },
                { "Name": "Belladona", "Kor": "벨라도나" },
                { "Name": "Bellflower", "Kor": "초롱꽃" },
                { "Name": "Bergamot Blossom", "Kor": "버가모트 꽃" },
                { "Name": "Bird cherry", "Kor": "새 체리" },
                { "Name": "Black Currant Blossom", "Kor": "블랙 커런트 꽃" },
                { "Name": "Blackberry Blossom", "Kor": "블랙베리 꽃" },
                { "Name": "Blue Lilies", "Kor": "파란 백합" },
                { "Name": "Blue Poppy", "Kor": "파란 양귀비" },
                { "Name": "Bottlebrush", "Kor": "병솔" },
                { "Name": "Bougainvillea", "Kor": "부겐빌레아" },
                { "Name": "Bread Flower", "Kor": "빵 꽃" },
                { "Name": "Bromelia", "Kor": "브로멜리아" },
                { "Name": "Buddleia", "Kor": "버들리아" },
                { "Name": "Butomus Umbellatus", "Kor": "부토머스 엄벨라투스" },
                { "Name": "Buttercup", "Kor": "금계국" },
                { "Name": "Cacao Blossom", "Kor": "카카오 꽃" },
                { "Name": "Calla Lily", "Kor": "카라 백합" },
                { "Name": "Camellia", "Kor": "동백" },
                { "Name": "Campion Flower", "Kor": "캠피온 꽃" },
                { "Name": "Cananga Flower", "Kor": "카낭가 꽃" },
                { "Name": "Cape Jasmine", "Kor": "말리 꽃" },
                { "Name": "Cardamine", "Kor": "카다민" },
                { "Name": "Carnation", "Kor": "카네이션" },
                { "Name": "Castor Oil Plant Blossom", "Kor": "캐스터 오일 식물 꽃" },
                { "Name": "Catmint", "Kor": "캣민트" },
                { "Name": "Ceanothus", "Kor": "씨아노투스" },
                { "Name": "Celosia", "Kor": "셀로시아" },
                { "Name": "Cerasus", "Kor": "체라수스" },
                { "Name": "Chamomile", "Kor": "캐모마일" },
                { "Name": "Cherry Blossom", "Kor": "벚꽃" },
                { "Name": "Chilli Blossom", "Kor": "칠리 꽃" },
                { "Name": "Chinaberry Tree", "Kor": "칠리트리" },
                { "Name": "Chrysanthemum", "Kor": "국화" },
                { "Name": "Cirrus", "Kor": "씨러스" },
                { "Name": "Clematis", "Kor": "클레마티스" },
                { "Name": "Clove", "Kor": "정향" },
                { "Name": "Coltsfoot", "Kor": "황사" },
                { "Name": "Comfrey", "Kor": "콤프리" },
                { "Name": "Cornflower", "Kor": "수레국화" },
                { "Name": "Cotton Blossom", "Kor": "목화 꽃" },
                { "Name": "Crape Myrtle", "Kor": "배롱나무" },
                { "Name": "Crocus", "Kor": "크로커스" },
                { "Name": "Daffodil", "Kor": "수선화" },
                { "Name": "Dahlia", "Kor": "대리아" },
                { "Name": "Daisy", "Kor": "데이지" },
                { "Name": "Dandelion", "Kor": "민들레" },
                { "Name": "Date Flower", "Kor": "대추 꽃" },
                { "Name": "Dianthus", "Kor": "디안터스" },
                { "Name": "Dietes", "Kor": "디이테스" },
                { "Name": "Edelweiss", "Kor": "에델바이스" },
                { "Name": "Elder Flower", "Kor": "엘더 꽃" },
                { "Name": "Erythrina", "Kor": "에리트리나" },
                { "Name": "Eucalyptus", "Kor": "유칼립투스" },
                { "Name": "Euphorbia", "Kor": "유포비아" },
                { "Name": "Fern", "Kor": "고사리" },
                { "Name": "Flamingo Flower", "Kor": "플라밍고 꽃" },
                { "Name": "Flax Blossom", "Kor": "아마 꽃" },
                { "Name": "Forsythia", "Kor": "개나리" },
                { "Name": "Foxglove", "Kor": "여우장갑" },
                { "Name": "Frangipani", "Kor": "프랑지파니" },
                { "Name": "Freesia", "Kor": "프리지아" },
                { "Name": "Fuchsia", "Kor": "퓨시아" },
                { "Name": "Gardenia", "Kor": "가데니아" },
                { "Name": "Geranium", "Kor": "제라늄" },
                { "Name": "Gerbera", "Kor": "거베라" },
                { "Name": "Gillyflower", "Kor": "길리플라워" },
                { "Name": "Ginkgo", "Kor": "은행나무" },
                { "Name": "Gladiolus", "Kor": "글라디올러스" },
                { "Name": "Goji Blossom", "Kor": "고지 꽃" },
                { "Name": "Golden Rod", "Kor": "골든 롯" },
                { "Name": "Gorse", "Kor": "고스" },
                { "Name": "Grape Blossom", "Kor": "포도 꽃" },
                { "Name": "Grape Hyacinth", "Kor": "포도 히아신스" },
                { "Name": "Hawthorn", "Kor": "산수유" },
                { "Name": "Hellebore", "Kor": "헬레보어" },
                { "Name": "Hibiscus", "Kor": "무궁화" },
                { "Name": "Hollyhock", "Kor": "홀리호크" },
                { "Name": "Honeysuckle", "Kor": "금은화" },
                { "Name": "Horse Chestnut", "Kor": "마밤" },
                { "Name": "Hosta", "Kor": "호스타" },
                { "Name": "Hyacinth", "Kor": "히아신스" },
                { "Name": "Hydrangea", "Kor": "수국" },
                { "Name": "Ilex", "Kor": "아일렉스" },
                { "Name": "Iris", "Kor": "붓꽃" },
                { "Name": "Jasmine", "Kor": "자스민" },
                { "Name": "Juniper", "Kor": "주니퍼" },
                { "Name": "Kiwi Flower", "Kor": "키위 꽃" },
                { "Name": "Lantana", "Kor": "란타나" },
                { "Name": "Lavender", "Kor": "라벤더" },
                { "Name": "Lemon Blossom", "Kor": "레몬 꽃" },
                { "Name": "Lilac", "Kor": "라일락" },
                { "Name": "Lily", "Kor": "백합" },
                { "Name": "Lily of the Valley", "Kor": "은방울꽃" },
                { "Name": "Linden", "Kor": "자작나무" },
                { "Name": "Lobelia", "Kor": "로벨리아" },
                { "Name": "Lotus", "Kor": "연꽃" },
                { "Name": "Lupine", "Kor": "루파인" },
                { "Name": "Magnolia", "Kor": "목련" },
                { "Name": "Mahonia", "Kor": "마호니아" },
                { "Name": "Mandevilla", "Kor": "만데빌라" },
                { "Name": "Maple Blossom", "Kor": "단풍나무 꽃" },
                { "Name": "Marigold", "Kor": "매리골드" },
                { "Name": "Marjoram", "Kor": "마조람" },
                { "Name": "Meadowfoam", "Kor": "메도폼" },
                { "Name": "Meadowsweet", "Kor": "미도스위트" },
                { "Name": "Mignonette", "Kor": "미뇽네트" },
                { "Name": "Mimosa", "Kor": "미모사" },
                { "Name": "Morning Glory", "Kor": "나팔꽃" },
                { "Name": "Mountain Laurel", "Kor": "산 로렐" },
                { "Name": "Myrtle", "Kor": "머틀" },
                { "Name": "Narcissus", "Kor": "나르시스" },
                { "Name": "Nasturtium", "Kor": "나스터션" },
                { "Name": "Nectarine Blossom", "Kor": "넥타린 꽃" },
                { "Name": "Nigella", "Kor": "니겔라" },
                { "Name": "Oleander", "Kor": "말괄량이" },
                { "Name": "Orange Blossom", "Kor": "오렌지 꽃" },
                { "Name": "Orchid", "Kor": "난초" },
                { "Name": "Oregano", "Kor": "오레가노" },
                { "Name": "Pansy", "Kor": "팬지" },
                { "Name": "Papaya Blossom", "Kor": "파파야 꽃" },
                { "Name": "Passion Flower", "Kor": "열매참새방울" },
                { "Name": "Peach Blossom", "Kor": "복숭아 꽃" },
                { "Name": "Pear Blossom", "Kor": "배 꽃" },
                { "Name": "Peony", "Kor": "모란" },
                { "Name": "Peppermint", "Kor": "페퍼민트" },
                { "Name": "Petunia", "Kor": "페튜니아" },
                { "Name": "Phlox", "Kor": "플록스" },
                { "Name": "Plum Blossom", "Kor": "매화" },
                { "Name": "Poinsettia", "Kor": "포인세티아" },
                { "Name": "Poppy", "Kor": "양귀비" },
                { "Name": "Primrose", "Kor": "프림로즈" },
                { "Name": "Protea", "Kor": "프로테아" },
                { "Name": "Pulsatilla", "Kor": "풀사틸라" },
                { "Name": "Quince Blossom", "Kor": "모과 꽃" },
                { "Name": "Ranunculus", "Kor": "라눈큘러스" },
                { "Name": "Raspberry Blossom", "Kor": "라즈베리 꽃" },
                { "Name": "Rhubarb Flower", "Kor": "대황 꽃" },
                { "Name": "Rose", "Kor": "장미" },
                { "Name": "Rose of Sharon", "Kor": "무궁화" },
                { "Name": "Rosemary", "Kor": "로즈메리" },
                { "Name": "Saffron", "Kor": "사프란" },
                { "Name": "Sage", "Kor": "세이지" },
                { "Name": "Saint John's Wort", "Kor": "세인트 존스 워트" },
                { "Name": "Sakura", "Kor": "사쿠라" },
                { "Name": "Salvia", "Kor": "살비아" },
                { "Name": "Sambac", "Kor": "삼박" },
                { "Name": "Saxifraga", "Kor": "암초" },
                { "Name": "Snapdragon", "Kor": "금어초" },
                { "Name": "Snowdrop", "Kor": "눈방울꽃" },
                { "Name": "Spirea", "Kor": "스피레아" },
                { "Name": "Spring Snowflake", "Kor": "봄 눈송이꽃" },
                { "Name": "Stock", "Kor": "스톡" },
                { "Name": "Strawberry Blossom", "Kor": "딸기 꽃" },
                { "Name": "Sunflower", "Kor": "해바라기" },
                { "Name": "Sweet Pea", "Kor": "스위트 피" },
                { "Name": "Tansy", "Kor": "탠지" },
                { "Name": "Tiger Lily", "Kor": "호랑나비 꽃" },
                { "Name": "Tulip", "Kor": "튤립" },
                { "Name": "Umbrella Plant Blossom", "Kor": "우산 식물 꽃" },
                { "Name": "Venus Flytrap Blossom", "Kor": "비너스 플라이트랩 꽃" },
                { "Name": "Verbena", "Kor": "베르베나" },
                { "Name": "Violet", "Kor": "제비꽃" },
                { "Name": "Wisteria", "Kor": "등나무" },
                { "Name": "Wolfsbane", "Kor": "늑대독" },
                { "Name": "Yarrow", "Kor": "노루오줌풀" },
                { "Name": "Yellow Jasmine", "Kor": "노랑 자스민" },
                { "Name": "Zinnia", "Kor": "지니아" }
            ]
        },
        
    ]
    const defaultNotes = []
    for (const dataset of initialData) {
        console.log(dataset.type);
        const accord = await db.Accord.findOne({ where: { Name: dataset.type } })
        const accordId = accord.dataValues.AccordID;
        
        for (const data of dataset.data) {
              data.AccordID = accordId;
              defaultNotes.push(data);
            }
        }
        console.log('defaultNotes=>',defaultNotes)
        defaultNotes.forEach((data)=> {
            createEntity(db.Note, data, "Name")
        })
}

const variantTypeSeed = () => {
    const defaultVariantType = [
    { Name : "Size", Kor: "사이즈"},
    { Name : "Color", Kor: "색깔"},
    { Name : "Scent", Kor: "향"},
    { Name : "Brand", Kor: "브랜드"},
    { Name : "Longevity", "Kor": "지속성"},
    { Name : "Sillage", Kor: "발산력"},
    { Name : "Season", Kor: "계절감"},
    { Name : "Others"},
]
    defaultVariantType.forEach((data)=> {
        createEntity(db.VariantType, data, "Name")
    })
}
const roleSeed = () => {
    const defaultRole =[
        { Name : "Superuser"},
        { Name : "Manager"},
        { Name : "Seller"},
        { Name : "Customer"},
        { Name : "Black"},
    ] 
    defaultRole.forEach((data)=> {
        createEntity(db.Role, data, "Name")
    })
}





const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const runSeeds = async () => {
  // Primary
//   await categorySeed();
//   await variantTypeSeed();
//   await roleSeed();
//   await accordSeed();

//   await delay(500); // 500 milliseconds
//   console.log('End of pause');

  // Secondary
  await noteSeed();
};

runSeeds().catch((error) => {
  console.error('An error occurred:', error);
});



const Perfume = [
    { Name: "Pleasures", Brand: "Estée Lauder" },
{ Name: "Aromatics Elixir", Brand: "Clinique" },
{ Name: "Knowing", Brand: "Estée Lauder" },
{ Name: "Sunflowers", Brand: "Elizabeth Arden" },
{ Name: "Green Tea", Brand: "Elizabeth Arden" },
{ Name: "Omnia", Brand: "Bvlgari" },
{ Name: "Beautiful", Brand: "Estée Lauder" },
{ Name: "CK One", Brand: "Calvin Klein" },
{ Name: "Alien", Brand: "Thierry Mugler" },
{ Name: "Fahrenheit", Brand: "Dior" },
,{ Name: "Burberry Brit", Brand: "Burberry" }
,{ Name: "L'Air du Temps", Brand: "Nina Ricci" }
,{ Name: "212", Brand: "Carolina Herrera" }
,{ Name: "Hugo", Brand: "Hugo Boss" }
,{ Name: "Kenzo Flower", Brand: "Kenzo" }
,{ Name: "The One", Brand: "Dolce & Gabbana" }
,{ Name: "L'Eau d'Issey", Brand: "Issey Miyake" }
,{ Name: "Poison", Brand: "Dior" }
,{ Name: "Amarige", Brand: "Givenchy" }
,{ Name: "Anais Anais", Brand: "Cacharel" }
,{ Name: "White Linen", Brand: "Estée Lauder" }
,{ Name: "Boucheron", Brand: "Boucheron" }
,{ Name: "Cool Water", Brand: "Davidoff" }
,{ Name: "Tresor", Brand: "Lancôme" }
,{ Name: "Romance", Brand: "Ralph Lauren" }
,{ Name: "Red Door", Brand: "Elizabeth Arden" }
,{ Name: "Gucci Rush", Brand: "Gucci" }
,{ Name: "Oscar", Brand: "Oscar de la Renta" }
,{ Name: "Champs Elysees", Brand: "Guerlain" }
,{ Name: "Happy", Brand: "Clinique" }
,{ Name: "Emporio Armani She", Brand: "Giorgio Armani" }
,{ Name: "Aqua Allegoria Herba Fresca", Brand: "Guerlain" }
,{ Name: "Allure", Brand: "Chanel" }
,{ Name: "Youth Dew", Brand: "Estée Lauder" }
,{ Name: "Samsara", Brand: "Guerlain" }
,{ Name: "Euphoria", Brand: "Calvin Klein" }
,{ Name: "Le Male", Brand: "Jean Paul Gaultier" }
,{ Name: "Paloma Picasso", Brand: "Paloma Picasso" }
,{ Name: "Dune", Brand: "Dior" }
,{ Name: "Be Delicious", Brand: "DKNY" }
,{ Name: "Shalimar", Brand: "Guerlain" }
,{ Name: "Cinema", Brand: "Yves Saint Laurent" }
,{ Name: "Rush", Brand: "Gucci" }
,{ Name: "Very Irresistible", Brand: "Givenchy" }
,{ Name: "Jungle Elephant", Brand: "Kenzo" }
,{ Name: "Angel Innocent", Brand: "Thierry Mugler" }
,{ Name: "Lolita Lempicka", Brand: "Lolita Lempicka" }
,{ Name: "Princess", Brand: "Vera Wang" }
,{ Name: "Bright Crystal", Brand: "Versace" }
,{ Name: "Code", Brand: "Giorgio Armani" }
,{ Name: "Omnia Crystalline", Brand: "Bvlgari" }
,{ Name: "Miracle", Brand: "Lancôme" }
,{ Name: "Brit", Brand: "Burberry" }
,{ Name: "Wish", Brand: "Chopard" }
,{ Name: "Touch", Brand: "Burberry" }
,{ Name: "Crystal Noir", Brand: "Versace" }
,{ Name: "Glow", Brand: "Jennifer Lopez" }
,{ Name: "Fantasy", Brand: "Britney Spears" }
,{ Name: "Paco Rabanne pour Elle", Brand: "Paco Rabanne" }
,{ Name: "Heat", Brand: "Beyoncé" }
,{ Name: "Eternity Moment", Brand: "Calvin Klein" }
,{ Name: "Pink Sugar", Brand: "Aquolina" }
,{ Name: "Curious", Brand: "Britney Spears" }
,{ Name: "Tommy Girl", Brand: "Tommy Hilfiger" }
,{ Name: "Still", Brand: "Jennifer Lopez" }
,{ Name: "Secret Obsession", Brand: "Calvin Klein" }
,{ Name: "Siren", Brand: "Paris Hilton" }
,{ Name: "Woman", Brand: "Ralph Lauren" }
,{ Name: "Reb'l Fleur", Brand: "Rihanna" }
,{ Name: "Lovestruck", Brand: "Vera Wang" }
,{ Name: "La Petite Robe Noire", Brand: "Guerlain" }
,{ Name: "Truth or Dare", Brand: "Madonna" }
,{ Name: "Daisy Dream", Brand: "Marc Jacobs" }
,{ Name: "Black Opium", Brand: "Yves Saint Laurent" }
,{ Name: "Miu Miu", Brand: "Miu Miu" }
,{ Name: "My Burberry", Brand: "Burberry" }
,{ Name: "Decadence", Brand: "Marc Jacobs" }
,{ Name: "Good Girl", Brand: "Carolina Herrera" }
,{ Name: "Scandal", Brand: "Jean Paul Gaultier" }
,{ Name: "Libre", Brand: "Yves Saint Laurent" }
,{ Name: "Idôle", Brand: "Lancôme" }
,{ Name: "My Way", Brand: "Giorgio Armani" }
,{ Name: "Her", Brand: "Burberry" }
,{ Name: "Nomade", Brand: "Chloé" }
,{ Name: "Amo Ferragamo", Brand: "Salvatore Ferragamo" }
,{ Name: "Girl of Now", Brand: "Elie Saab" }
,{ Name: "Toy 2", Brand: "Moschino" }
,{ Name: "Gabrielle", Brand: "Chanel" }
,{ Name: "Aura", Brand: "Thierry Mugler" }
,{ Name: "Twilly d'Hermès", Brand: "Hermès" }
,{ Name: "Mon Guerlain", Brand: "Guerlain" }
,{ Name: "L'Interdit", Brand: "Givenchy" }
,{ Name: "Joy", Brand: "Dior" }
,{ Name: "Because It's You", Brand: "Emporio Armani" }
,{ Name: "Yes I Am", Brand: "Cacharel" }
,{ Name: "Azzaro Wanted Girl", Brand: "Azzaro" }
,{ Name: "Ralph", Brand: "Ralph Lauren" }
,{ Name: "212 VIP", Brand: "Carolina Herrera" }
,{ Name: "1 Million", Brand: "Paco Rabanne" }
,{ Name: "CK One Shock", Brand: "Calvin Klein" }
,{ Name: "Black XS", Brand: "Paco Rabanne" }
,{ Name: "Viktor & Rolf Spicebomb", Brand: "Viktor & Rolf" }
,{ Name: "Gucci Guilty", Brand: "Gucci" }
,{ Name: "Versace Eros", Brand: "Versace" }
,{ Name: "Invictus", Brand: "Paco Rabanne" }
,{ Name: "Stronger With You", Brand: "Emporio Armani" }
,{ Name: "Sauvage", Brand: "Dior" }
,{ Name: "Y", Brand: "Yves Saint Laurent" }
,{ Name: "Bad Boy", Brand: "Carolina Herrera" }
,{ Name: "Explorer", Brand: "Montblanc" }
,{ Name: "K", Brand: "Dolce & Gabbana" }
,{ Name: "Le Male Le Parfum", Brand: "Jean Paul Gaultier" }
,{ Name: "Ultra Male", Brand: "Jean Paul Gaultier" }
,{ Name: "Hugo Just Different", Brand: "Hugo Boss" }
,{ Name: "Legend", Brand: "Montblanc" }
,{ Name: "Lacoste L.12.12 Blanc", Brand: "Lacoste" }
,{ Name: "Boss Bottled", Brand: "Hugo Boss" }
,{ Name: "Nautica Voyage", Brand: "Nautica" }
,{ Name: "Versace Man Eau Fraiche", Brand: "Versace" }
,{ Name: "Polo Blue", Brand: "Ralph Lauren" }
,{ Name: "The Scent", Brand: "Hugo Boss" }
,{ Name: "Dylan Blue", Brand: "Versace" }
,{ Name: "Coach for Men", Brand: "Coach" }
,{ Name: "Jimmy Choo Man", Brand: "Jimmy Choo" }
,{ Name: "Montblanc Explorer", Brand: "Montblanc" }
,{ Name: "Acqua di Giò Profondo", Brand: "Giorgio Armani" }
,{ Name: "Wanted", Brand: "Azzaro" }
,{ Name: "Dior Homme", Brand: "Dior" }
,{ Name: "Y Eau de Parfum", Brand: "Yves Saint Laurent" }
,{ Name: "Paco Rabanne 1 Million Parfum", Brand: "Paco Rabanne" }
,{ Name: "Bleu de Chanel Parfum", Brand: "Chanel" }
,{ Name: "Eros Eau de Parfum", Brand: "Versace" }
,{ Name: "Dior Sauvage Parfum", Brand: "Dior" }
,{ Name: "Acqua di Giò Profondo Lights", Brand: "Giorgio Armani" }
,{ Name: "Stronger With You Absolutely", Brand: "Emporio Armani" }
,{ Name: "Le Mâle Le Parfum", Brand: "Jean Paul Gaultier" }
,{ Name: "L'Homme Le Parfum", Brand: "Yves Saint Laurent" }
,{ Name: "Acqua di Giò Profondo", Brand: "Giorgio Armani" }
,{ Name: "The Scent Absolute", Brand: "Hugo Boss" }
,{ Name: "Montblanc Explorer Ultra Blue", Brand: "Montblanc" }
,{ Name: "Acqua di Giò Profumo", Brand: "Giorgio Armani" }
,{ Name: "Invictus Victory", Brand: "Paco Rabanne" }
,{ Name: "Gentleman Eau de Parfum", Brand: "Givenchy" }
,{ Name: "Boss Bottled Eau de Parfum", Brand: "Hugo Boss" }
,{ Name: "Dior Homme Intense", Brand: "Dior" }
,{ Name: "Bvlgari Man Glacial Essence", Brand: "Bvlgari" }
,{ Name: "Azzaro Wanted by Night", Brand: "Azzaro" }
,{ Name: "Pure XS", Brand: "Paco Rabanne" }
,{ Name: "Spicebomb Extreme", Brand: "Viktor & Rolf" }
,{ Name: "Bleu de Chanel Eau de Parfum", Brand: "Chanel" }
,{ Name: "Y Eau de Parfum", Brand: "Yves Saint Laurent" }
,{ Name: "Eros Flame", Brand: "Versace" }
,{ Name: "1 Million Lucky", Brand: "Paco Rabanne" }
,{ Name: "Hugo Now", Brand: "Hugo Boss" }
,{ Name: "Viktor & Rolf Spicebomb Infrared", Brand: "Viktor & Rolf" }
,{ Name: "Coach Blue", Brand: "Coach" }
,{ Name: "Stronger With You Intensely", Brand: "Emporio Armani" }
,{ Name: "Lacoste L.12.12 Blanc Eau de Parfum", Brand: "Lacoste" }
,{ Name: "Wanted Tonic", Brand: "Azzaro" }
,{ Name: "L'Homme Cologne Bleue", Brand: "Yves Saint Laurent" }
,{ Name: "Versace Dylan Turquoise", Brand: "Versace" }
,{ Name: "Lacoste L.12.12 Jaune", Brand: "Lacoste" }
,]