export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxae6e85561ec17a38",

  // 公众号APP_SECRET
  APP_SECRET: "3bea50e080622c02b629c2bbe2d7d174",

 
  USERS: [
    {
      // 想要发送的人的名字
      name: "小周同学",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "3bea50e080622c02b629c2bbe2d7d174",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "	qEQKw-O7fDKBpxFF5lYvaMFoBWr3c-kd8brv6sXMi78",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: ""
    },
    {
      // 想要发送的人的名字
      name: "小吴小朋友",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "omQMg5qRUlngJH2Im_JeVVSwiL8M",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "qEQKw-O7fDKBpxFF5lYvaMFoBWr3c-kd8brv6sXMi78",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: ""}

  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "6BW9W6sTJTlqL1o6j3gdAu508erQXpoL2uDadhsoFKg",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "小吴",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "omQMg5qRUlngJH2Im_JeVVSwiL8M",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 所在省份
  PROVINCE: "贵州",
  // 所在城市
  CITY: "遵义",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "小吴的宝贝", "year": "2001", "date": "09-20"},
    {"type": "节日", "name": "恋爱纪念日", "year": "2021", "date": "09-22"}
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 2,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2021-09-22"}
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
      "世界上所有的相遇都是久别重逢。",
      "鲜花怒骂少年时，一日看尽长安花。",
      "愿岁月可回首，且以深情共白头。",
      "草在结它的种子，风在摇它的叶子。我们站着不说话，就十分美好。",
      "你应该是一场梦，我应该是一阵风。",
      "愿你垂垂老矣，我可明我心。",
      "今夜我不关心人类，我只想你。",
      "想起你，我这张丑脸就泛起微笑。",
      "我喜欢田野，而我愚笨。只能植荒十年，换得一时春生。",
      "哪里有人会喜欢孤独，不过是不喜欢失望。",
      "你没有如期归来，而这正是离别的意义。",
      "海底月是天上月，眼前人是心上人。",
      "我只愿面朝大海，春暖花开。",
      "枕上诗书闲处好，门前风景雨来佳。",
      "你是千堆雪，我是长街。怕日出一到，彼此瓦解。",
      "在青山绿水之间，我想牵着你的手，走过这座桥，桥上是绿叶红花，桥下是流水人家，桥的那头是青丝，桥的这头是白发。",
      "答案很长，我准备用一生时间来回答，你准备听了吗？",
      "春风再美也比不上你的笑，没见过你的人不会明了。",
      "夜阑卧听风吹雨，铁马是你，冰河也是你。",
      "余生还长，请多多指教。.秋风凉，秋风忘，今夜别思量。",
      "我还是很喜欢你，像风走了八千里，不问归期。",
      "每个人心里都有一团火，路过的人只看到烟。",
      "最悲伤的事莫过于在痛苦中回忆起往昔的快乐。",
      "雨水透过窗。思念传彼岸，你在我心房。",
      "那时我们有梦，关于文学，关于爱情，关于穿越世界的旅行。如今我们深夜饮酒，杯子碰到一起，都是梦破碎的声音。",
      "如今的气质里，藏着你走过的路，读过的书和爱过的人。",
      "剑未佩妥，出门已是江湖；酒尚余温，入口不识乾坤。远离尽千帆，归来仍是少年。",
      "每一个不曾起舞的日子，都是岁生命的辜负。",
      "最美的不是下雨天，是曾经和你躲过的屋檐。",
      "一个人只拥有此生此世是不够的，他还应该拥有诗意的世界。",
      "眼睛为她下着雨，心却为她打着伞，这就是爱情。",
      "当一个人不能拥有的是时候，他唯一能做的就是不要忘记。",
      "岁月不饶人，我亦未曾绕过岁月。",
      "我为你翻山越岭，却无心看风景。",
      "若我遇见你，事隔经年，我将如何致你，以眼泪，以沉默。",
      "红尘陌上，独自行走，绿萝拂过衣襟，青云打湿诺言。山和水可以两两相忘，日与月可以毫无瓜葛。那时候，只一个人的浮世清欢，一个人的细水长流。",
      "人性本凉薄，又何介，谁比谁更多。",
      "雪沫乳花浮午盏 ，蓼茸蒿笋试春盘，人间有味是清欢。",
      "我将于茫茫人海中访我唯一灵魂之伴侣；得之，我幸；不得，我命。",
      "深情若是一桩悲剧，必定以死来句读。",
      "你年轻时很美丽，身边有许多追求者，不过跟那时相比，我更喜欢你经历了沧桑的容颜。",
      "兴亡千古繁华梦，诗眼倦天涯。",
      "你还不来，我怎敢老去。",
      "曾踏月而来，只因你在山中。山风拂发、拂颈、拂裸露的肩膀，而月光衣我以华裳 。",
      "遇见你之前，我没想过结婚，遇见你之后，结婚我没想过别人。",
      "原是今生今世已惘然， 山河岁月空惆怅， 而我，终将是要等着你的。",
      "树在，山在，大地在，岁月在，我在，你还要怎样更好的世界？",
      "于千万人之中遇见你所要遇见的人，于千万年之中，时间的无涯的荒野里，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话可说，惟有轻轻地问一声：“噢，你也在这里吗？”",


    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
