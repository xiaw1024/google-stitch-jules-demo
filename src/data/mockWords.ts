import type { Word, WordBook } from '../store/types';

// 模拟词库数据
export const mockWords: Word[] = [
  {
    id: '1',
    word: 'Ephemeral',
    phonetic: '/əˈfemərəl/',
    meaning: '转瞬即逝的，短暂的',
    example: 'Life is ephemeral, but art is eternal.',
    exampleTranslation: '生命是短暂的，但艺术是永恒的。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '2',
    word: 'Pragmatic',
    phonetic: '/præɡˈmætɪk/',
    meaning: '务实的；实事求是的',
    example: 'We need a pragmatic approach to solve this problem.',
    exampleTranslation: '我们需要一个务实的方法来解决这个问题。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '3',
    word: 'Resilience',
    phonetic: '/rɪˈzɪliəns/',
    meaning: '恢复力；韧性',
    example: 'Her resilience helped her overcome many challenges.',
    exampleTranslation: '她的韧性帮助她克服了许多挑战。',
    partOfSpeech: '名词',
    category: '学术词汇'
  },
  {
    id: '4',
    word: 'Sagacity',
    phonetic: '/səˈɡæsəti/',
    meaning: '睿智；聪敏',
    example: 'The old man was known for his sagacity.',
    exampleTranslation: '这位老人以他的睿智而闻名。',
    partOfSpeech: '名词',
    category: '学术词汇'
  },
  {
    id: '5',
    word: 'Ubiquitous',
    phonetic: '/juːˈbɪkwɪtəs/',
    meaning: '无处不在的；普遍存在的',
    example: 'Smartphones have become ubiquitous in modern society.',
    exampleTranslation: '智能手机在现代社会已经无处不在。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '6',
    word: 'Eloquent',
    phonetic: '/ˈeləkwənt/',
    meaning: '雄辩的；有说服力的',
    example: 'She gave an eloquent speech that moved everyone.',
    exampleTranslation: '她发表了一篇感人的雄辩演讲。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '7',
    word: 'Meticulous',
    phonetic: '/məˈtɪkjələs/',
    meaning: '一丝不苟的；小心翼翼的',
    example: 'He is meticulous about every detail in his work.',
    exampleTranslation: '他对工作中的每一个细节都一丝不苟。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '8',
    word: 'Ambiguous',
    phonetic: '/æmˈbɪɡjuəs/',
    meaning: '模糊的；不明确的',
    example: 'The instructions were ambiguous and confusing.',
    exampleTranslation: '这些说明模糊不清，令人困惑。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '9',
    word: 'Profound',
    phonetic: '/prəˈfaʊnd/',
    meaning: '深刻的；意义深远的',
    example: 'The book had a profound impact on my thinking.',
    exampleTranslation: '这本书对我的思想产生了深远的影响。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '10',
    word: 'Inevitable',
    phonetic: '/ɪnˈevɪtəbl/',
    meaning: '不可避免的；必然的',
    example: 'Change is inevitable in life.',
    exampleTranslation: '生活中变化是不可避免的。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '11',
    word: 'Perseverance',
    phonetic: '/ˌpɜːrsəˈvɪrəns/',
    meaning: '坚持不懈；毅力',
    example: 'Success requires perseverance and hard work.',
    exampleTranslation: '成功需要坚持不懈和努力工作。',
    partOfSpeech: '名词',
    category: '学术词汇'
  },
  {
    id: '12',
    word: 'Enigmatic',
    phonetic: '/ˌenɪɡˈmætɪk/',
    meaning: '神秘的；令人费解的',
    example: 'She has an enigmatic smile like Mona Lisa.',
    exampleTranslation: '她有着蒙娜丽莎般神秘的微笑。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '13',
    word: 'Catalyst',
    phonetic: '/ˈkætəlɪst/',
    meaning: '催化剂；促进因素',
    example: 'The event was a catalyst for change.',
    exampleTranslation: '这个事件是变革的催化剂。',
    partOfSpeech: '名词',
    category: '学术词汇'
  },
  {
    id: '14',
    word: 'Diligent',
    phonetic: '/ˈdɪlɪdʒənt/',
    meaning: '勤奋的；刻苦的',
    example: 'She is a diligent student who always completes her homework.',
    exampleTranslation: '她是一个勤奋的学生，总是完成作业。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '15',
    word: 'Versatile',
    phonetic: '/ˈvɜːrsətl/',
    meaning: '多才多艺的；多用途的',
    example: 'He is a versatile actor who can play any role.',
    exampleTranslation: '他是一个多才多艺的演员，可以扮演任何角色。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '16',
    word: 'Tenacious',
    phonetic: '/təˈneɪʃəs/',
    meaning: '坚韧的；顽强的',
    example: 'Her tenacious spirit helped her succeed.',
    exampleTranslation: '她坚韧的精神帮助她取得了成功。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '17',
    word: 'Comprehensive',
    phonetic: '/ˌkɒmprɪˈhensɪv/',
    meaning: '全面的；综合的',
    example: 'We need a comprehensive plan to address this issue.',
    exampleTranslation: '我们需要一个全面的计划来解决这个问题。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '18',
    word: 'Innovative',
    phonetic: '/ˈɪnəveɪtɪv/',
    meaning: '创新的；革新的',
    example: 'The company is known for its innovative products.',
    exampleTranslation: '这家公司以其创新产品而闻名。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '19',
    word: 'Subtle',
    phonetic: '/ˈsʌtl/',
    meaning: '微妙的；细微的',
    example: 'There is a subtle difference between these two words.',
    exampleTranslation: '这两个词之间有微妙的区别。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '20',
    word: 'Paradigm',
    phonetic: '/ˈpærədaɪm/',
    meaning: '范例；典范',
    example: 'This discovery represents a paradigm shift in science.',
    exampleTranslation: '这一发现代表了科学的范式转变。',
    partOfSpeech: '名词',
    category: '学术词汇'
  },
  {
    id: '21',
    word: 'Articulate',
    phonetic: '/ɑːrˈtɪkjələt/',
    meaning: '清晰表达的；善于表达的',
    example: 'She is very articulate in expressing her ideas.',
    exampleTranslation: '她非常善于表达自己的想法。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '22',
    word: 'Diligence',
    phonetic: '/ˈdɪlɪdʒəns/',
    meaning: '勤奋；勤勉',
    example: 'His diligence was rewarded with a promotion.',
    exampleTranslation: '他的勤奋得到了晋升的回报。',
    partOfSpeech: '名词',
    category: '学术词汇'
  },
  {
    id: '23',
    word: 'Efficacy',
    phonetic: '/ˈefɪkəsi/',
    meaning: '功效；效力',
    example: 'The efficacy of this medicine has been proven.',
    exampleTranslation: '这种药的功效已被证实。',
    partOfSpeech: '名词',
    category: '学术词汇'
  },
  {
    id: '24',
    word: 'Gratitude',
    phonetic: '/ˈɡrætɪtjuːd/',
    meaning: '感激；感恩',
    example: 'I want to express my gratitude for your help.',
    exampleTranslation: '我想对你的帮助表示感激。',
    partOfSpeech: '名词',
    category: '学术词汇'
  },
  {
    id: '25',
    word: 'Hypothesis',
    phonetic: '/haɪˈpɒθəsɪs/',
    meaning: '假设；假说',
    example: 'Scientists tested the hypothesis through experiments.',
    exampleTranslation: '科学家通过实验验证了这个假设。',
    partOfSpeech: '名词',
    category: '学术词汇'
  },
  {
    id: '26',
    word: 'Integrity',
    phonetic: '/ɪnˈteɡrəti/',
    meaning: '正直；诚实',
    example: 'He is a man of great integrity.',
    exampleTranslation: '他是一个非常正直的人。',
    partOfSpeech: '名词',
    category: '学术词汇'
  },
  {
    id: '27',
    word: 'Juxtapose',
    phonetic: '/ˌdʒʌkstəˈpəʊz/',
    meaning: '并列；并置',
    example: 'The artist juxtaposed old and new elements.',
    exampleTranslation: '艺术家将新旧元素并列在一起。',
    partOfSpeech: '动词',
    category: '学术词汇'
  },
  {
    id: '28',
    word: 'Kinetic',
    phonetic: '/kɪˈnetɪk/',
    meaning: '运动的；动力学的',
    example: 'Kinetic energy is the energy of motion.',
    exampleTranslation: '动能是运动的能量。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '29',
    word: 'Lucid',
    phonetic: '/ˈluːsɪd/',
    meaning: '清晰的；明白的',
    example: 'She gave a lucid explanation of the concept.',
    exampleTranslation: '她对这个概念做了清晰的解释。',
    partOfSpeech: '形容词',
    category: '学术词汇'
  },
  {
    id: '30',
    word: 'Mitigate',
    phonetic: '/ˈmɪtɪɡeɪt/',
    meaning: '减轻；缓和',
    example: 'We need to mitigate the effects of climate change.',
    exampleTranslation: '我们需要减轻气候变化的影响。',
    partOfSpeech: '动词',
    category: '学术词汇'
  }
];

// 词书列表
export const wordBooks: WordBook[] = [
  {
    id: 'ielts-core',
    name: '雅思核心词汇',
    description: '雅思考试必备核心词汇',
    totalWords: 1200,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1W8D_6IKSTo8dnZgBjjUT86fFvZxFcJT_q1P7A-Yo4YNTgNNd8nKcoFuJ0OOJ3sZeuiAy27_XbV1gY-fewrKlmB7-UjGCM7et5o_ZR_5zb2qJXnA9d1aRuP48k7U_Krnt66BfJu45RLl8EDZkWkyAoB0GFNcR9kzW9PjfSDmHMZX3HSJ-vpGRIdZ0h8UmUQmJZuQo4cHJhm0PoYYkZ3chB_B6cWrFZ79GjZtDEXYkyanB7c1V5TjIV9J7p7aHMJjAxizXtGZ_IFX0'
  },
  {
    id: 'toefl-advanced',
    name: '托福高级词汇',
    description: '托福考试高级词汇精选',
    totalWords: 1500,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1W8D_6IKSTo8dnZgBjjUT86fFvZxFcJT_q1P7A-Yo4YNTgNNd8nKcoFuJ0OOJ3sZeuiAy27_XbV1gY-fewrKlmB7-UjGCM7et5o_ZR_5zb2qJXnA9d1aRuP48k7U_Krnt66BfJu45RLl8EDZkWkyAoB0GFNcR9kzW9PjfSDmHMZX3HSJ-vpGRIdZ0h8UmUQmJZuQo4cHJhm0PoYYkZ3chB_B6cWrFZ79GjZtDEXYkyanB7c1V5TjIV9J7p7aHMJjAxizXtGZ_IFX0'
  },
  {
    id: 'gre-essential',
    name: 'GRE核心词汇',
    description: 'GRE考试必备词汇',
    totalWords: 2000,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1W8D_6IKSTo8dnZgBjjUT86fFvZxFcJT_q1P7A-Yo4YNTgNNd8nKcoFuJ0OOJ3sZeuiAy27_XbV1gY-fewrKlmB7-UjGCM7et5o_ZR_5zb2qJXnA9d1aRuP48k7U_Krnt66BfJu45RLl8EDZkWkyAoB0GFNcR9kzW9PjfSDmHMZX3HSJ-vpGRIdZ0h8UmUQmJZuQo4cHJhm0PoYYkZ3chB_B6cWrFZ79GjZtDEXYkyanB7c1V5TjIV9J7p7aHMJjAxizXtGZ_IFX0'
  }
];

// 获取随机单词
export function getRandomWords(count: number, excludeIds: string[] = []): Word[] {
  const availableWords = mockWords.filter(w => !excludeIds.includes(w.id));
  const shuffled = [...availableWords].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// 根据ID获取单词
export function getWordById(id: string): Word | undefined {
  return mockWords.find(w => w.id === id);
}

// 获取词书信息
export function getBookById(id: string): WordBook | undefined {
  return wordBooks.find(b => b.id === id);
}
