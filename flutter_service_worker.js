'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "16281e57025205d5cf2124905d67598d",
".git/config": "2d66d56229b23a9cfa0fc7ffc3ae7fa8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d21aff041fe32d5112b52bd0aa0c1681",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7c95ab1859f14ed5463a59bd9ac4191e",
".git/logs/refs/heads/master": "7c95ab1859f14ed5463a59bd9ac4191e",
".git/logs/refs/remotes/origin/master": "d55e996bf211362ddbc26462d625a78f",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/01/87f038986665f4bd2aa2117fca38bb37a467c7": "807a77493fe920ec194c1c8a3e58861e",
".git/objects/02/f02ff41db4a6167f6ae43b0f0fbc254a1ed1dc": "804f7df5ee5419f9e4f9c4c7a26f6129",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/a8bbcb8dd2d350cb540eca6afb704ef52c2019": "26684dfa96327fe9b4cb1200369aa967",
".git/objects/06/d600dad9f2c5b4eb7bd713d5c60fc7c7a8021e": "a2b7f80541ef861570f46d1bdad128d0",
".git/objects/07/0a7691c7ed7ab39026e179beee1ef08903e604": "7fa0251a8dd17c4e89effee4e5bfe065",
".git/objects/07/c948e4bd21c7cb5c6e9de9693dfae7f90d3670": "98d827f17fb06f1524180cb79e6b5625",
".git/objects/09/0d5995f2d740e20b39deb64bb808849f8138ef": "01b0cc04fa739d483770b93ff8b16d19",
".git/objects/09/3fd2318d3f182739f424d3a1f407f1fc6dd20f": "2144e08ea8ded5f97683289f13268b61",
".git/objects/0a/ac5662d8fd5cc363cbb57ce6a4f37e660f09c9": "55e7cf7aa995eec4dd089c16546d0439",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/f92f11a17a28b29cfc4c588af16096ea68c424": "bc01acecc935d92161a247a7ff01c08c",
".git/objects/11/8502b73cac696da03f893b070422d2caaf128e": "72bf0c580a72cb3a068552e1f9dd2238",
".git/objects/12/49e3da20f9d01f34a0517a75f467f15f668c44": "8ddad9ade74813fcc34d6b6592c03353",
".git/objects/15/da561d7da0fcda35ef4bc5460f63f62763e844": "de1b95e1158a3ea7a7030a31ab3bfa1b",
".git/objects/15/fb25d37b0890ab9d9b96dfcff971a1ab24d147": "6384483e3892fff8ec8727c3ff2422d8",
".git/objects/16/ba7c3753a12c0e0b4b2ddebcb6837a942654c8": "51691a37aa70050a9418b07690ab06ec",
".git/objects/18/ad4cdd36790feaf467445ff74afef5e201613c": "1762e47c1357248dfc8763d580a86df3",
".git/objects/1d/cf96180aad67bd9dfa041a5d8951137dd91b08": "9eb9a4c8d396273d259b79a12e6c597e",
".git/objects/1e/75c0a4638327ee7e1f9bc7b9d0ca6f07920c6c": "bcca78322538f0011f9c8dff5d0feaf4",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/0491689d6f564407e4416c0810d15f1d3e76e7": "87dba7fd9d1e133be1f7bf2bfe09e019",
".git/objects/22/8a9da75c842c962a670174a71bb4a66e61a6c9": "9452a7a534ab2f062729cd1221f64327",
".git/objects/23/89397f1615253c7e3c6ac60e96313047633b07": "68ab01116e006aba65ee0bd4fd14ea03",
".git/objects/25/8e8b81a4f05d40b29537714a8b8538c563b0ce": "e607d66803870dce85fb1369a5af6973",
".git/objects/25/d60fe4de19fe092bb744c2d861e3c26898580a": "a3384f16f217b70a52439a0874eca24d",
".git/objects/26/8d4b66f2de03d0d4eebd5f60a93062f9418aa4": "3d15bcec2f3439dbad8d8d7bc052eb3e",
".git/objects/27/958ec82e1addcef5e53c469784aeeec00872a2": "a81aebb9a35e66d1b79eeab36eb0488c",
".git/objects/2f/0a8fe5cbdcb1838785b0369ba5ef495099d75e": "e64d20c0c19a4ac3466fb4cb142bba25",
".git/objects/33/2fbffad17fbb9a4bf40903382385ed4c6da3a1": "78952f1625a44364c822a1277fe8a318",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/cab7eb8de291b667e1037932c53997bf4f2750": "d17b8ec1e94d7527b169ea249736960a",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/39bf7a1cc7248be854b5e1d92d7a9b3d45ce2c": "2d180ca87948556dff5d6d67a07b831e",
".git/objects/39/8deb9ede7d9aeeb2a3bcd2da8ad69bcea03d30": "e59b480fdcefc484d8397066f9a011d4",
".git/objects/3c/476a05e925d0406bafd3e29b536795f23900ac": "7b64aa0cfe84ee1d1f11b1339e4a6c46",
".git/objects/3f/e754fa09aa49a193eaa600249b27a33ddd6a1a": "1fc44774a65de31f5ae3f1b7e0b9fddb",
".git/objects/3f/edaa18f633a24a904ed3379706abd31f149373": "c588104a7f453ce67bd2be5e60f4c0a9",
".git/objects/42/48861321ec9e15a5c0552d69e5023e4ac4fc72": "d3dc7f0cfe48a702e28f5398347194e8",
".git/objects/43/39c4a939a8d6dbc6129b01e04cce536e409832": "a59169c4081e633a6efb682ccd01501c",
".git/objects/45/bfa59980910b2202304a4f3966ad90a96db024": "bdcb64922657a3cdbd9a94e4d908201a",
".git/objects/49/d56ebad796a49b1fab895e9cc696d239511af5": "f841814c33289b39143e7c2111f047d6",
".git/objects/4d/877147db7d6c377f08386d1d92fdc380e3c912": "0defde7fcee9deddf8403f757ac54027",
".git/objects/4e/00ce7905fcafce07ecadcb95e52b38a3b0a450": "cefa811b8c7d004c2ac1121fcaf99780",
".git/objects/4f/d2a46ed0400050076521d909d1562d303f9d45": "11364dd7675a3c85d07d7d8ef46ff9ba",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/0bea05ae8e2c576040da78638b1a54c9440a7b": "a194dd1852c87315a76fc9dbccad82f5",
".git/objects/56/4320c064e03e244421677b316203b29856cf1d": "d3b8cdc1c1ed655d119770754aad099f",
".git/objects/57/a0d08e4451f8e20ab50e8bd33b1e0891418758": "f013e17d19dba00a7797d8cf79169bb2",
".git/objects/58/944739e5f690baf716fe17f8c0d2a1b05a0b35": "2da11c66ba935800654a1598faf2c46b",
".git/objects/5a/58043530f8c532987d42e8a4d643c754603fb3": "05345c1f6793e280643b86f2bb0a3bfc",
".git/objects/5a/6118a6d028188425a256196533e4a0ac4c36d3": "4b04512d3c57d113068549d2e7c74698",
".git/objects/5a/95f11564d5b2593c224cc7c0ef4808392cbdc9": "1557e658db215cf5bb4a360f6400a163",
".git/objects/5c/2e3bb2014728875a3f0feffbbfd06c98d35e3e": "0a22250d5c08c5c63b9150fb8f8215aa",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/15df96e2462d8c74469481166376b3fa8fa707": "a4e671250b7a013873ef4f2f03220541",
".git/objects/66/8c144386f8c0ace4e0df5dae3fa79d2226a204": "9dacd458b36499c35cf3cb0166fc7ede",
".git/objects/6b/7d33fea1c9dda961df06eb97b33ea67d2214d8": "ddd498549ae5199be863dd5dcdd42766",
".git/objects/6e/1c900b4920b0016e3fc068f5f0272e9ab12b39": "9820415a9aca729d9d3571f5a11acdbd",
".git/objects/6e/c099f1504dc7b49d3ccde1c744095a106ee1e4": "630c70a2a6f09db8bbc4f7b1bae58233",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/6967eed16f3c1fbcb1b0c70456208836ab953f": "09de9b25215d6c7abd9a76ec6a8e38c2",
".git/objects/71/dfd9736ca9fc005001c63ae7b4801f4dcfe114": "7c62f423d5cb2750e8f6b2576417f39c",
".git/objects/78/50ee2c684dc8a58f7e4b65307e08e26aa56ead": "d4ce42a4dde1f7bd4dca63465945c203",
".git/objects/7b/3f8eabf2f80cd66dd3aa924f324264da2af96e": "256293c08b58f04bcdb0293ac3586acc",
".git/objects/7b/5dfd4a288ec02d07a517c10074b07f9e80857b": "1a1255d6e0baf58871e45299dfac060c",
".git/objects/81/88585e17883c7cdab8607144c2d5f95873ec29": "2e18169d261dffdb5594855eeb8d8c37",
".git/objects/81/f8576146f03c7cf1644d1aaf77cb0022cd4ea3": "98bc634070fd0738773a854a2fc69153",
".git/objects/86/f9f9f49d20500c7a5933a4a9e765e8a3cd2ee6": "dc87387f135fdb927e0248f9c7e25c6e",
".git/objects/89/1af9b51585b25f5c029a7d9bfbb96744be7b73": "de76448cd39edb73306107844d366443",
".git/objects/8a/0e643e1c35d8b5049ba3c08c6aba894361bb29": "ade18e69500c8546c2b4cfc740b24fbc",
".git/objects/8f/1e29ad4fed778913dc0d98982b3219855fd9a6": "617d7870e06a94082fab858bb82fc969",
".git/objects/8f/3af8aff005481cf19f3d170b4dd129d99f79af": "96b227f3cef2be706333742ef31f1089",
".git/objects/8f/dc6053e0096790560b96a0003d0e508d4c3d07": "91728c308be56844d32f759533eeb3b7",
".git/objects/90/21abb67ff8ac9891f056c38b754dd14f3197b9": "2f09b52d2b3368adb85fec8d5eec4884",
".git/objects/93/d92d905b732fa01a1b034cda1bdb381064e870": "e352af08afba0da858c66ebf6c4b9ac4",
".git/objects/95/0028f6d7c4519f146ef01b67791911a1b68e52": "8346746c6a8a449f4c15e5d55a4b614e",
".git/objects/95/4c15cf520c084d30cfbbe937740944e2620d86": "9514ad376396e177d259a8bf8ecc6383",
".git/objects/95/88f5daa0df5b068c651d1e9335265bf971ba28": "e7634df98384b50aaef16d4fd06b3fdf",
".git/objects/99/6d256ea4b4042328169a0d7d9e99cc0bdf2261": "e1b22a243f19298ca9c5e3ac1823db91",
".git/objects/9c/f8b8acf39be88f1292f62586d8c37446eebe9f": "b521ef2c9b8e1ab478aa3ab71a474495",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a6/d929cbe367bc45110433bfba47c326096fcb97": "fe2473e9886a014aec1c68cc3fd32f1f",
".git/objects/a7/ef44fecc8d80daef274d74afe3dd59d66d15dc": "35cdf9e4ffc0e4519d087514ecd165e7",
".git/objects/ae/c6548413d1cecae7badc6835e8f6ace757571d": "ce7b7569c7432075e72c8f52d4d7aaf5",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/379e19ba87ac30a073ebbab4aea1fe0c9429bb": "614f360e67e4f73c94e742f2d3ea3863",
".git/objects/b5/0c32d0260edec6a2d19bf30e7670c1be666795": "33fa3e3f41a7aced3164115b505d23a3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/7c8af26e5a976219c0ebc7bad8200c16d3cb93": "33b2e36463b5b019417d2f0addf1f09e",
".git/objects/c5/1634816211f73cb25263953019a8a09b1158df": "4823fcd36111655712b2abbede004181",
".git/objects/c8/e3f33e3d09ad88cc5aed3b1fc3bbb23b55a00f": "3a32a8854a6ee7f74fc5879a56317b54",
".git/objects/c9/3e0ca9d3f75ced8df133f8d0cbf616c795b614": "8386900eebb8500dea699459c6b8200a",
".git/objects/c9/47e8dc5bfd0cedc275072f52d647f6bf06b0ba": "c8ed67f32ba5fd3dec569f746e57ffbb",
".git/objects/ca/3bd945d6bac1b73a4e964cfd667e68bf3f36c5": "ff4bb4dc74ed533c755514b1f67fea1d",
".git/objects/ca/eeba1ee4c39f3f4f3f2c523d815f3c5706d13e": "09c8a9d7815e9dfbd623cf526d705092",
".git/objects/cb/3331f2c973d7b27eaa39209050e5252c96e40c": "1c7355993849c422fb66b4cc4b8f6dc6",
".git/objects/cd/5af725c5e5b30f0e58e5cad638fcc594ca1992": "5fae8bf05895fc3f0c7f578babb2eb6f",
".git/objects/d2/6b59334b31e8da8cc636131a52d8916a495bcd": "0c313118d574c212c00183f0ce47921b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/03f6bff50f0b08310ad0a686e692d95825f60f": "dbfe18cfc8b926a1ed0c12c612f61a65",
".git/objects/d5/95a8795223941f4f91ec240e7096183c214762": "35fe0697efb20ba4c081df7b3f4d6531",
".git/objects/d6/91c6553e4f148e01bee40c6a6745343357732f": "7487c951d990423d2df0dbf3dc7e1fee",
".git/objects/d7/1474d8083e4251d2903719e409c682a136d4d6": "12375872134a3af38025f1045cc95220",
".git/objects/d8/ec3da9acbd39c7f8c9f9480d3d1b1aa727533b": "5db0f60af2a713f0727fc21777f465fd",
".git/objects/de/0bc70b3693c1975c4891e54a146f6f03706ae7": "a682f4d381057b6e926678b7709c526d",
".git/objects/de/efcb2adf12d4f0fb69c20cb8f9226f627f93f8": "8ffe5d88c1d7eec9389719a9644ee687",
".git/objects/e1/ea43544e07d9c6b54a1fc70057e9f680e33326": "4c3638504cb2d751a6bb73fe6a258bbc",
".git/objects/e4/7d57eb702486b667b841dc3ff05de6f05914ae": "4fc9fe45bdf0e3bfbf26d8bb1893aea8",
".git/objects/e8/02bd07d2e4355929ac5c31ad053bb34862de37": "d638d0f2cc33888fb0682d2c5fc29ddd",
".git/objects/e8/0838677a12c52a185e3e3d6d446b9bee32313a": "0fa9f3cf235e9e0d2a889df792af0b0e",
".git/objects/e8/4d188a2da6e9784674a11c763b7bdc11518f53": "115b974ede5d3b5d84ccdee65896ec8e",
".git/objects/eb/d67db7e0c31becc35e2cc62b3b1d32c5737f5f": "50a76c07a1cd60b9a0df8c5da70773b1",
".git/objects/ec/5b7535057e36e68f366aae9beb22c6dc715eb2": "ca05468da2b2daabb872cd3b874fe7c9",
".git/objects/ee/847a19227a4373ccc3c39524cd4c3f4d60cc6b": "f92579076c70d52367e5aee28055085e",
".git/objects/f2/0c8d8559b687a3dc42ec7c1f40a3843914e86f": "63a42bb7c4490227671564478067945a",
".git/objects/f2/26c5c33cf39bc35cd3a86bfe57d7ad0b6f4727": "2260cf989ab0bcc2158a1ac8fe08924d",
".git/objects/f6/352cbc1befca50b419a5fa2932b62e6d9d645b": "7be5fcb45cb86b59a4554525c6cc3078",
".git/objects/fa/983c6d855f1cd4035d6f4e40d9709873eb44dd": "26dab6f0d941228a06d4dd5c5df54eb2",
".git/objects/fb/5bf3828ce4a7f09b990506cb8e11803c7cb38d": "920f4ab728fa44865e286d1e4d448dfa",
".git/objects/fc/1e4d9335bf9666651baa5206e397f4f44fc1c2": "11a7a81ae5f20cb2894695c6f17e49de",
".git/objects/ff/ba7691829635bbccac0599a28e4d3d53fc5010": "b849b8a135ca64a070a7499293c14239",
".git/refs/heads/master": "898cc482ab75084fc797ce20c77f3cd4",
".git/refs/remotes/origin/master": "898cc482ab75084fc797ce20c77f3cd4",
"assets/AssetManifest.bin": "53f2188c6c4c99fe4bf88b94c2042136",
"assets/AssetManifest.json": "f6e5d3af7ab788362db03780fed0d66d",
"assets/assets/imgs/catsu.png": "e8d170feb69189af04eccde6821cbc55",
"assets/assets/imgs/cict.png": "ff47d420d511a4d3d1e1255bf6a2d616",
"assets/assets/imgs/header.png": "5625c8afb5aad2f23f53a0a75eb34fe3",
"assets/assets/imgs/icon.png": "894ff3f963fd00636347d27255f56bd6",
"assets/assets/imgs/logo.png": "9e6c6acca30523eb1973f4abdbf021a9",
"assets/FontManifest.json": "b46195787001748a93911a0a95010dec",
"assets/fonts/MaterialIcons-Regular.otf": "a18bf6fb694b4684ecef310769ade9e1",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "6c0387694f811488b0c292852660ec86",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "146d759fa7e12e7e810edd2b24fe52b9",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "0f2da6cff4252d627071a866b1225631",
"icons/Icon-512.png": "d00fb6cd079b8cd7917957676079978d",
"icons/Icon-maskable-192.png": "0f2da6cff4252d627071a866b1225631",
"icons/Icon-maskable-512.png": "d00fb6cd079b8cd7917957676079978d",
"index.html": "0484bcb6a6a458180ebdebb6a8114cd4",
"/": "0484bcb6a6a458180ebdebb6a8114cd4",
"main.dart.js": "05d5d3f5ae50db6e7e93e0669f0586dd",
"manifest.json": "27388942a3a8dc2ce7ee8fef4f91f2f2",
"splash/img/dark-1x.png": "753ac4d2d0e45856c3cc93694568be02",
"splash/img/dark-2x.png": "eae8e2b23e305a0224e8e463cecd7d6c",
"splash/img/dark-3x.png": "fa23d7e6e8de2c5715bc7d77eb50d17a",
"splash/img/dark-4x.png": "53ad7378afb7a7a441d4fe1814e39885",
"splash/img/light-1x.png": "753ac4d2d0e45856c3cc93694568be02",
"splash/img/light-2x.png": "eae8e2b23e305a0224e8e463cecd7d6c",
"splash/img/light-3x.png": "fa23d7e6e8de2c5715bc7d77eb50d17a",
"splash/img/light-4x.png": "53ad7378afb7a7a441d4fe1814e39885",
"version.json": "727cbadc5a2d3a20f23064bbba2b0f6f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
