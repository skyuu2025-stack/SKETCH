
import { Lesson } from './types';

export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: "手绘工具与线条之美",
    subtitle: "工欲善其事，必先利其器",
    category: "基础",
    content: "服装手绘不仅仅是记录设计，更是一种艺术表达。本课将深入探讨酒精马克笔与水性马克笔的区别，以及如何通过不同硬度的铅笔（H-4B）来铺设初稿。线条练习是肌肉记忆的训练，重点在于控制笔尖在纸面上的流速与压力。",
    keyPoints: [
      "马克笔选购：初学者建议配置24-36色灰调色系",
      "线条艺术：练习从极细到极粗的渐变过渡",
      "排线逻辑：平行排线、交叉排线在明暗表达中的应用",
      "纸张克数：120g-160g马克笔专用纸可防止洇墨"
    ],
    homework: "在A4纸上完成4组练习：平行细线、S型曲线、疏密渐变排线各一组。",
    materials: ["HB铅笔", "0.3mm代针笔", "马克笔专用纸", "酒精马克笔"],
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545670723-196ed0955986?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 2,
    title: "九头身人体比例详解",
    subtitle: "构建理想的服装载体",
    category: "人体",
    content: "为了使服装看起来更有垂感和张力，服装画通常采用‘九头身’比例。我们将人体简化为垂直的重力线和水平的骨盆线、肩线。理解头部长与全身长的比例关系（1:9），是防止比例失调的关键。",
    keyPoints: [
      "九头划分法：头部占1，躯干占3，下肢占5",
      "关键关节点：腰部位于第3头底部，膝盖位于第6头底部",
      "宽度参考：肩宽约为1.5-2个头宽，胯宽与肩宽接近",
      "简化骨架：使用球体和圆柱体快速构建人体体积感"
    ],
    homework: "绘制三个不同视角的九头身正立人体草图（正面、侧面、3/4侧面）。",
    materials: ["2B铅笔", "橡皮擦", "比例尺"],
    imageUrl: "https://images.unsplash.com/photo-1544391496-1ca7c9749710?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537113399617-8a5d025ed5ad?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 3,
    title: "动态韵律与重心平衡",
    subtitle: "让模特在纸面上‘走’起来",
    category: "人体",
    content: "静态人体往往显得呆板。本课引入‘Contrapposto’（对立平衡）概念：当一侧胯部抬高时，对侧肩膀会自然下沉以保持平衡。通过扭动的脊椎中心线，我们可以创造出极具时尚感的动态姿势。",
    keyPoints: [
      "重心足原理：重心必须落在支撑脚的脚踝位置",
      "S形曲线：脊椎、肩线与胯线的动态拮抗关系",
      "四肢的透视：利用缩减法绘制伸向观众的手臂或腿",
      "节奏感：长线与短线的结合使用"
    ],
    homework: "临摹三组经典走秀动态姿势，标注出每个动作的重心点和肩跨斜线。",
    materials: ["软芯铅笔", "素描本"],
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 4,
    title: "平面款式图：精准生产语言",
    subtitle: "设计落地的第一步",
    category: "款式",
    content: "款式图（Flat Sketch）是给打版师和工厂看的‘说明书’。它要求绝对的比例准确和细节清晰。我们需要学习如何表达省道、工字褶、暗门襟、双针明线等专业缝纫工艺。",
    keyPoints: [
      "对称工具：使用复写或镜像构图确保左右对称",
      "线条分级：外轮廓用粗线，内部结构用中线，明线用极细虚线",
      "细节放大图：对于复杂的口袋或领口需要单独绘制放大图",
      "厚度表达：通过侧面厚度线表现面料的松量"
    ],
    homework: "绘制一件标准白衬衫的正面及背面款式图，并标注扣眼位置及缝迹线。",
    materials: ["0.1mm/0.5mm代针笔", "云形尺", "方格纸"],
    imageUrl: "https://images.unsplash.com/photo-1551488532-65d5841e067c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542060717-d791fa0bbba8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1520006403993-474cb428c0f7?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 5,
    title: "褶皱逻辑：重力与身体的博弈",
    subtitle: "赋予布料真实感",
    category: "表现",
    content: "褶皱不是随意涂鸦，而是面料受到身体支撑点和重力共同作用的结果。本课深入研究：腋下的放射褶、手肘的积压褶、裙摆的下垂褶。理解面料克重对褶皱形状的影响（真丝轻盈、毛呢厚重）。",
    keyPoints: [
      "支撑点分析：肩膀、肘部、跨部是褶皱的发散源",
      "‘Y’字型与‘X’字型褶皱的明暗处理",
      "面料垂坠感：通过裙摆的波浪线起伏表现厚度",
      "阴影深度：利用马克笔叠色增加褶皱的深度感"
    ],
    homework: "选取一种面料（如牛仔布或薄绸），练习绘制该面料在关节弯曲时的褶皱变化图。",
    materials: ["彩色铅笔", "冷灰色系马克笔"],
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 6,
    title: "五官神韵与发型流向",
    subtitle: "画龙点睛的艺术",
    category: "表现",
    content: "服装画不需要极度写实的肖像，但需要‘神似’。学习如何用简洁的三五笔勾勒出模特的厌世脸或甜美感。发型则应被视为一个整体的色块，先画大形，再刻画边缘的碎发感。",
    keyPoints: [
      "眼妆表达：重点刻画上眼睑和眼尾的阴影",
      "唇部质感：留白表现唇釉的光泽感",
      "发丛逻辑：头发成束生长，利用高光线区分发丝层次",
      "极简主义：尝试只画嘴唇和一侧眼睛的时尚插画风"
    ],
    homework: "练习绘制6种不同的时尚发型（高马尾、复古大波浪、超短发等）及其明暗关系。",
    materials: ["0.05mm超细代针笔", "肤色系马克笔"],
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 7,
    title: "马克笔大师级叠色技巧",
    subtitle: "让色彩具有呼吸感",
    category: "表现",
    content: "马克笔是服装手绘的灵魂。本课将教授‘湿画法’（接色自然）和‘干画法’（边缘锐利）。学习如何利用0号无色马克笔进行晕染，以及如何通过补色叠色来调出更高级的‘莫兰迪’灰调。",
    keyPoints: [
      "渐变技巧：从浅色到深色，趁湿快速衔接",
      "高光预留：提前规划白色区域，避免画面死板",
      "混色原理：蓝色叠黄色产生绿色，利用透叠创造层次",
      "修正技巧：白色高光笔在深色背景上的后期提亮"
    ],
    homework: "完成一张色块渐变练习图，包含至少10种不同颜色的自然过渡。",
    materials: ["全套酒精马克笔", "白色提亮笔"],
    imageUrl: "https://images.unsplash.com/photo-1525904097878-94fb15835963?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 8,
    title: "特殊面料质感攻克",
    subtitle: "从真丝到皮草的模拟",
    category: "表现",
    content: "不同面料的画法大相径庭。丝绸需要大面积的顺滑色块和锐利的高光；皮革则需要通过明暗强烈对比表现硬挺度；针织面料则需利用马克笔笔触模拟‘针脚’的纹理。本课将逐一击破。",
    keyPoints: [
      "丹宁面料：利用马克笔的侧峰扫出粗糙的纹理感",
      "蕾丝表现：先铺底色，再用代针笔勾勒精细的花纹",
      "亮片材质：利用点彩法，结合高光笔点出璀璨感",
      "皮草技巧：边缘处画出放射状细线，增加蓬松度"
    ],
    homework: "在一组人体草图上分别绘制：皮革短裙、真丝吊带、粗花呢外套。",
    materials: ["高光笔", "彩色铅笔", "马克笔"],
    imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3ecaa40477?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 9,
    title: "完整服装效果图：设计表达",
    subtitle: "从构思到成品的全流程",
    category: "综合",
    content: "本课将所有技能整合。学习如何根据灵感主题（如：赛博朋克、极简中式）设计一套完整的服装。重点在于画面构图、主次刻画（如：脸部和服装中心精细，裙摆边缘可写意）。",
    keyPoints: [
      "灵感板转换：从图片中提取色彩搭配和元素细节",
      "虚实结合：通过线条的疏密引导观众视线",
      "背景处理：利用大块灰色调或几何图形衬托主体",
      "签名与排版：在画面的适当位置留下个人标识"
    ],
    homework: "以‘未来主义’为主题，绘制一张包含完整背景和面料细节的服装效果图。",
    materials: ["马克笔", "代针笔", "彩铅", "水粉提亮"],
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 10,
    title: "系列化排版与作品集准备",
    subtitle: "走向专业设计师的台阶",
    category: "综合",
    content: "单张画作只是开始，系列化表达才是核心能力。学习如何在同一张图纸上排版3-5个LOOK，并配以面料小样、文字说明。了解如何通过扫描和后期软件（PS/AI）微调色彩，准备专业作品集。",
    keyPoints: [
      "系列连贯性：色彩、面料或廓形的统一",
      "主次排版：主模特较大且精细，次模特较小或只勾线",
      "面料样片展示：在角落绘制1x1cm的面料特写图",
      "数字处理：学习扫描仪的最佳DPI设置（推荐300DPI以上）"
    ],
    homework: "为一个三件套系列完成最终排版，包含标题、面料小样和简短的设计说明。",
    materials: ["电脑", "扫描仪", "排版纸"],
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1450297350677-623de4a5af31?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1487017664839-288405076447?auto=format&fit=crop&w=400&q=80"
    ]
  }
];
