/**
 * موارد تخصص الهندسة (العاشر، الأول ثانوي، الثاني ثانوي بمساراته).
 * الروابط وفق ما أرسله المستخدم.
 */

type FType = "pdf" | "doc" | "presentation" | "folder";
type F = { name: string; url: string; type: FType };

const f = (name: string, url: string, type: FType = "pdf"): F => ({ name, url, type });

const S = (partial: Partial<{ books: F[]; specs: F[]; explanations: F[]; teacherGuide: F[]; assignments: F[] }>) => ({
  books: { files: partial.books ?? [] },
  specs: { files: partial.specs ?? [] },
  explanations: { files: partial.explanations ?? [] },
  teacherGuide: { files: partial.teacherGuide ?? [] },
  assignments: { files: partial.assignments ?? [] },
});

const G10_SPEC = "/resources/Engineering/resource_56.pdf";
const G11_SPEC = "/resources/Engineering/resource_57.pdf";
const G12_EL_SPEC = "/resources/Engineering/resource_58.pdf";
const G12_ME_SPEC = "/resources/Engineering/resource_59.pdf";
const G12_VT_SPEC = "/resources/Engineering/resource_60.pdf";

const grade10: {
  semester1: ReturnType<typeof S>;
  semester2: ReturnType<typeof S>;
  semester3: ReturnType<typeof S>;
} = {
  semester1: S({
    specs: [
      f("جدول المواصفات — العمل بأمان وفاعلية في الورشة الهندسية", G10_SPEC),
      f("جدول المواصفات — مهارات في المسائل الهندسية لابتكار الحلول", G10_SPEC),
      f("جدول المواصفات — التحقق من منتج هندسي", G10_SPEC),
      f("جدول المواصفات — الصيانة الهندسية", G10_SPEC),
    ],
    books: [
      f("كتاب العمل بأمان وفاعلية في الورشة الهندسية", "/resources/Engineering/resource_61.pdf"),
      f("كتاب مهارات في المسائل الهندسية لابتكار الحلول", "/resources/Engineering/resource_62.pdf"),
      f("كتاب التحقق من منتج هندسي", "/resources/Engineering/resource_63.pdf"),
      f("كتاب الصيانة الهندسية", "/resources/Engineering/resource_64.pdf"),
    ],
    explanations: [
      f("شرح العمل بأمان وفاعلية في الورشة الهندسية", "/resources/Engineering/resource_65.pptx", "presentation"),
      f("شرح مهارات في المسائل الهندسية لابتكار الحلول", "/resources/Engineering/resource_66.pptx", "presentation"),
    ],
    teacherGuide: [
      f("دليل المعلم — العمل بأمان وفاعلية في الورشة الهندسية", "/resources/Engineering/resource_67.docx", "doc"),
      f("دليل المعلم — مهارات في المسائل الهندسية لابتكار الحلول", "/resources/Engineering/resource_68.docx", "doc"),
      f("دليل المعلم — التحقق من منتج هندسي", "/resources/Engineering/resource_69.docx", "doc"),
      f("دليل المعلم — الصيانة الهندسية", "/resources/Engineering/resource_70.docx", "doc"),
    ],
    assignments: [
      f("مهمة العمل بأمان وفاعلية في الورشة الهندسية (أ + ب)", "/resources/Engineering/resource_71.docx", "doc"),
      f("مهمة مهارات في المسائل الهندسية لابتكار الحلول (أ)", "/resources/Engineering/resource_72.docx", "doc"),
      f("مهمة التحقق من منتج هندسي (أ + ب)", "/resources/Engineering/resource_73.docx", "doc"),
      f("مهمة الصيانة الهندسية (أ + ب)", "/resources/Engineering/resource_74.docx", "doc"),
    ],
  }),
  semester2: S({
    specs: [
      f("جدول المواصفات — الرياضيات لفني الهندسي", G10_SPEC),
      f("جدول المواصفات — المواد الهندسية", G10_SPEC),
      f("جدول المواصفات — إنشاء الدوائر الكهربائية والإلكترونية واختبارها", G10_SPEC),
      f("جدول المواصفات — البرمجة العامة", G10_SPEC),
      f("جدول المواصفات — تقنيات صيانة المركبات", G10_SPEC),
    ],
    books: [
      f("كتاب الرياضيات لفني الهندسي", "/resources/Engineering/resource_75.pdf"),
      f("كتاب المواد الهندسية", "/resources/Engineering/resource_76.pdf"),
      f("كتاب إنشاء الدوائر الكهربائية والإلكترونية واختبارها", "/resources/Engineering/resource_77.pdf"),
      f("كتاب البرمجة العامة", "/resources/Engineering/resource_78.pdf"),
      f("كتاب تقنيات صيانة المركبات", "/resources/Engineering/resource_79.pdf"),
    ],
    explanations: [
      f("شرح الرياضيات لفني الهندسي", "/resources/Engineering/resource_80.pptx", "presentation"),
      f("شرح المواد الهندسية", "/resources/Engineering/resource_81.pptx", "presentation"),
      f("شرح إنشاء الدوائر الكهربائية والإلكترونية واختبارها", "/resources/Engineering/resource_82.pptx", "presentation"),
      f("شرح البرمجة العامة", "/resources/Engineering/resource_83.pptx", "presentation"),
      f("شرح تقنيات صيانة المركبات", "/resources/Engineering/resource_84.pptx", "presentation"),
    ],
    teacherGuide: [
      f("دليل المعلم — الرياضيات لفني الهندسي", "/resources/Engineering/resource_85.docx", "doc"),
      f("دليل المعلم — المواد الهندسية", "/resources/Engineering/resource_86.docx", "doc"),
      f("دليل المعلم — إنشاء الدوائر الكهربائية والإلكترونية واختبارها", "/resources/Engineering/resource_87.docx", "doc"),
      f("دليل المعلم — البرمجة العامة", "/resources/Engineering/resource_88.docx", "doc"),
      f("دليل المعلم — تقنيات صيانة المركبات", "/resources/Engineering/resource_89.docx", "doc"),
    ],
    assignments: [
      f("مهمة الرياضيات لفني الهندسي (أ)", "/resources/Engineering/resource_90.docx", "doc"),
      f("مهمة المواد الهندسية (أ)", "/resources/Engineering/resource_91.docx", "doc"),
      f("مهمة إنشاء الدوائر الكهربائية والإلكترونية واختبارها (أ + ب)", "/resources/Engineering/resource_92.docx", "doc"),
      f("مهمة البرمجة العامة (أ)", "/resources/Engineering/resource_93.docx", "doc"),
      f("مهمة تقنيات صيانة المركبات (أ)", "/resources/Engineering/resource_94.docx", "doc"),
    ],
  }),
  semester3: S({
    specs: [
      f("جدول المواصفات — الرسم الهندسي", G10_SPEC),
      f("جدول المواصفات — تقنيات تحسين الإدارة", G10_SPEC),
      f("جدول المواصفات — تقنيات التصنيع", G10_SPEC),
      f("جدول المواصفات — العلوم الكهربائية والميكانيكة الهندسية", G10_SPEC),
    ],
    books: [
      f("كتاب الرسم الهندسي", "/resources/Engineering/resource_95.pdf"),
      f("كتاب تقنيات تحسين الإدارة", "/resources/Engineering/resource_96.pdf"),
      f("كتاب تقنيات التصنيع", "/resources/Engineering/resource_97.pdf"),
      f("كتاب العلوم الكهربائية والميكانيكة الهندسية", "/resources/Engineering/resource_98.pdf"),
      f("كتاب تشغيل وصيانة الأنظمة والمكونات الكهربائية والإلكترونية", "/resources/Engineering/resource_99.pdf"),
    ],
    explanations: [
      f("شرح الرسم الهندسي", "/resources/Engineering/resource_100.pptx", "presentation"),
      f("شرح اللحام", "/resources/Engineering/resource_101.pptx", "presentation"),
      f("شرح تقنيات تحسين الإدارة", "/resources/Engineering/resource_102.pptx", "presentation"),
      f("شرح تقنيات التصنيع", "/resources/Engineering/resource_103.pptx", "presentation"),
      f("شرح العلوم الكهربائية والميكانيكة الهندسية", "/resources/Engineering/resource_104.pptx", "presentation"),
      f("شرح تشغيل وصيانة الأنظمة والمكونات الكهربائية والإلكترونية", "/resources/Engineering/resource_105.pptx", "presentation"),
    ],
    teacherGuide: [
      f("دليل المعلم — الرسم الهندسي", "/resources/Engineering/resource_106.docx", "doc"),
      f("دليل المعلم — اللحام", "/resources/Engineering/resource_107.docx", "doc"),
      f("دليل المعلم — تقنيات تحسين الإدارة", "/resources/Engineering/resource_108.docx", "doc"),
      f("دليل المعلم — تقنيات التصنيع", "/resources/Engineering/resource_109.docx", "doc"),
      f("دليل المعلم — العلوم الكهربائية والميكانيكة الهندسية", "/resources/Engineering/resource_110.docx", "doc"),
      f("دليل المعلم — تشغيل وصيانة الأنظمة والمكونات الكهربائية والإلكترونية", "/resources/Engineering/resource_111.docx", "doc"),
    ],
    assignments: [
      f("مهمة الرسم الهندسي (أ)", "/resources/Engineering/resource_112.docx", "doc"),
      f("مهمة اللحام (أ + ب)", "/resources/Engineering/resource_113.docx", "doc"),
      f("مهمة تقنيات تحسين الإدارة (أ)", "/resources/Engineering/resource_114.docx", "doc"),
      f("مهمة تقنيات التصنيع (أ)", "/resources/Engineering/resource_115.docx", "doc"),
      f("مهمة العلوم الكهربائية والميكانيكة الهندسية (أ)", "/resources/Engineering/resource_116.docx", "doc"),
      f("مهمة تشغيل وصيانة الأنظمة والمكونات الكهربائية والإلكترونية (أ)", "/resources/Engineering/resource_117.docx", "doc"),
    ],
  }),
};

const grade11 = {
  semester1: S({
    specs: [
      f("جدول المواصفات — المبادئ الميكانيكية", G11_SPEC),
      f("جدول المواصفات — المبادئ الكهربائية والإلكترونية", G11_SPEC),
    ],
    books: [
      f("كتاب المبادئ الميكانيكية", "/resources/Engineering/resource_118.pdf"),
      f("كتاب المبادئ الكهربائية والإلكترونية", "/resources/Engineering/resource_119.pdf"),
    ],
    explanations: [
      f("شرح المبادئ الميكانيكية", "/resources/Engineering/resource_120.pptx", "presentation"),
      f("شرح المبادئ الكهربائية والإلكترونية", "/resources/Engineering/resource_121.pptx", "presentation"),
    ],
    teacherGuide: [
      f("دليل المعلم — المبادئ الميكانيكية", "/resources/Engineering/resource_122.docx", "doc"),
      f("دليل المعلم — المبادئ الكهربائية والإلكترونية", "/resources/Engineering/resource_123.docx", "doc"),
    ],
    assignments: [
      f("مهمة المبادئ الميكانيكية", "/resources/Engineering/resource_124.docx", "doc"),
      f("مهمة المبادئ الكهربائية والإلكترونية", "/resources/Engineering/resource_125.docx", "doc"),
    ],
  }),
  semester2: S({
    specs: [
      f("جدول المواصفات — مبادئ التجارة والجودة التطبيقية بالهندسة", G11_SPEC),
      f("جدول المواصفات — تقديم العمليات الهندسية بأمان كفريق", G11_SPEC),
    ],
    books: [
      f("كتاب مبادئ التجارة والجودة التطبيقية بالهندسة", "/resources/Engineering/resource_126.pdf"),
      f("كتاب تقديم العمليات الهندسية بأمان كفريق", "/resources/Engineering/resource_127.pdf"),
    ],
    explanations: [
      f("شرح تقديم العمليات الهندسية بأمان كفريق", "/resources/Engineering/resource_128.pptx", "presentation"),
      f("شرح مبادئ التجارة والجودة التطبيقية بالهندسة", "/resources/Engineering/resource_129.pptx", "presentation"),
    ],
    teacherGuide: [
      f("دليل المعلم — تقديم العمليات الهندسية بأمان كفريق", "/resources/Engineering/resource_130.docx", "doc"),
      f("دليل المعلم — مبادئ التجارة والجودة التطبيقية بالهندسة", "/resources/Engineering/resource_131.docx", "doc"),
    ],
    assignments: [
      f("مهمة تقديم العمليات الهندسية بأمان كفريق", "/resources/Engineering/resource_132.docx", "doc"),
      f("مهمة مبادئ التجارة والجودة التطبيقية بالهندسة", "/resources/Engineering/resource_133.docx", "doc"),
    ],
  }),
  semester3: S({
    specs: [f("جدول المواصفات — تصميم وتصنيع المنتجات في مجال الهندسة", G11_SPEC)],
    books: [f("كتاب تصميم وتصنيع المنتجات في مجال الهندسة", "/resources/Engineering/resource_134.pdf")],
    explanations: [
      f("شرح تصميم وتصنيع المنتجات في مجال الهندسة", "/resources/Engineering/resource_135.pptx", "presentation"),
      f("شرح أنظمة التصنيع الحديثة", "/resources/Engineering/resource_136.pptx", "presentation"),
    ],
    teacherGuide: [
      f("دليل المعلم — تصميم وتصنيع المنتجات في مجال الهندسة", "/resources/Engineering/resource_137.docx", "doc"),
      f("دليل المعلم — أنظمة التصنيع الحديثة", "/resources/Engineering/resource_138.docx", "doc"),
    ],
    assignments: [
      f("مهمة تصميم وتصنيع المنتجات في مجال الهندسة", "/resources/Engineering/resource_139.docx", "doc"),
      f("مهمة أنظمة التصنيع الحديثة", "/resources/Engineering/resource_140.docx", "doc"),
    ],
  }),
};

const emptyG12 = {
  semester1: S({}),
  semester2: S({}),
  semester3: S({}),
};

const grade12Electrical = {
  semester1: S({
    specs: [
      f("(تخصص الكهرباء) جدول المواصفات — محركات المركبات الكهربائية والهجينة", G12_EL_SPEC),
      f("(تخصص الكهرباء) جدول المواصفات — الأجهزة والدوائر الإلكترونية", G12_EL_SPEC),
      f("(تخصص الكهرباء) جدول المواصفات — أنظمة الدفع في المركبات الكهربائية", G12_EL_SPEC),
      f("(تخصص الكهرباء) جدول المواصفات — الدوائر الإلكترونية التناظرية", G12_EL_SPEC),
    ],
    books: [
      f("(تخصص الكهرباء) كتاب محركات المركبات الكهربائية والهجينة", "/resources/Engineering/resource_141.pdf"),
      f("(تخصص الكهرباء) كتاب الأجهزة والدوائر الإلكترونية", "/resources/Engineering/resource_142.pdf"),
      f("(تخصص الكهرباء) كتاب أنظمة الدفع في المركبات الكهربائية", "/resources/Engineering/resource_143.pdf"),
      f("(تخصص الكهرباء) كتاب الدوائر الإلكترونية التناظرية", "/resources/Engineering/resource_144.pdf"),
    ],
    explanations: [
      f("شرح + سلايدات — الأجهزة والدوائر الإلكترونية (كهرباء)", "/resources/Engineering/resource_145.pptx", "presentation"),
      f("شرح + سلايدات — الدوائر الإلكترونية التناظرية (كهرباء)", "/resources/Engineering/resource_146.pptx", "presentation"),
    ],
    assignments: [
      f("مهمة الأجهزة والدوائر الإلكترونية (كهرباء)", "/resources/Engineering/resource_147.docx", "doc"),
      f("مهمة الدوائر الإلكترونية التناظرية (كهرباء)", "/resources/Engineering/resource_148.docx", "doc"),
    ],
    teacherGuide: [
      f("دليل المعلم — الأجهزة والدوائر الإلكترونية (كهرباء)", "/resources/Engineering/resource_149.docx", "doc"),
      f("دليل المعلم — الدوائر الإلكترونية التناظرية (كهرباء)", "/resources/Engineering/resource_150.docx", "doc"),
    ],
  }),
  semester2: S({
    specs: [
      f("(تخصص الكهرباء) جدول المواصفات — التنقل الكهربي", G12_EL_SPEC),
      f("(تخصص الكهرباء) جدول المواصفات — القياس والاختبار الإلكتروني للدوائر", G12_EL_SPEC),
      f("(تخصص الكهرباء) جدول المواصفات — تشغيل أنظمة الإشعال الإلكترونية في المركبات واختبارها", G12_EL_SPEC),
      f("(تخصص الكهرباء) جدول المواصفات — الأنظمة الإلكترونية التناظرية والرقمية", G12_EL_SPEC),
    ],
    books: [
      f("(تخصص الكهرباء) كتاب التنقل الكهربي", "/resources/Engineering/resource_151.pdf"),
      f("(تخصص الكهرباء) كتاب القياس والاختبار الإلكتروني للدوائر", "/resources/Engineering/resource_152.pdf"),
      f("(تخصص الكهرباء) كتاب تشغيل أنظمة الإشعال الإلكترونية في المركبات واختبارها", "/resources/Engineering/resource_153.pdf"),
      f("(تخصص الكهرباء) كتاب الأنظمة الإلكترونية التناظرية والرقمية", "/resources/Engineering/resource_154.pdf"),
    ],
    explanations: [
      f("شرح + سلايدات — القياس والاختبار الإلكتروني للدوائر (كهرباء)", "/resources/Engineering/resource_155.pptx", "presentation"),
    ],
    assignments: [
      f("مهمة القياس والاختبار الإلكتروني للدوائر (كهرباء)", "/resources/Engineering/resource_156.docx", "doc"),
    ],
    teacherGuide: [
      f("دليل المعلم — القياس والاختبار الإلكتروني للدوائر (كهرباء)", "/resources/Engineering/resource_157.docx", "doc"),
    ],
  }),
  semester3: S({
    specs: [
      f("(تخصص الكهرباء) جدول المواصفات — أنظمة التعليق والتوجيه والكبح في المركبات الخفيفة", G12_EL_SPEC),
      f("(تخصص الكهرباء) جدول المواصفات — المتحكمات المنطقية القابلة للبرمجة", G12_EL_SPEC),
      f("(تخصص الكهرباء) جدول المواصفات — تشغيل أنظمة نقل الحركة في المركبات الخفيفة وصيانتها", G12_EL_SPEC),
      f("(تخصص الكهرباء) جدول المواصفات — الروبوتات الصناعية", G12_EL_SPEC),
    ],
    books: [
      f("(تخصص الكهرباء) كتاب أنظمة التعليق والتوجيه والكبح في المركبات الخفيفة", "/resources/Engineering/resource_158.pdf"),
      f("(تخصص الكهرباء) كتاب المتحكمات المنطقية القابلة للبرمجة", "/resources/Engineering/resource_159.pdf"),
      f("(تخصص الكهرباء) كتاب تشغيل أنظمة نقل الحركة في المركبات الخفيفة وصيانتها", "/resources/Engineering/resource_160.pdf"),
      f("(تخصص الكهرباء) كتاب الروبوتات الصناعية", "/resources/Engineering/resource_161.pdf"),
    ],
    explanations: [
      f("شرح + سلايدات — المتحكمات المنطقية القابلة للبرمجة (كهرباء)", "/resources/Engineering/resource_162.pptx", "presentation"),
      f("شرح + سلايدات — الروبوتات الصناعية (كهرباء)", "/resources/Engineering/resource_163.pptx", "presentation"),
    ],
    assignments: [
      f("مهمة المتحكمات المنطقية القابلة للبرمجة (كهرباء)", "/resources/Engineering/resource_164.docx", "doc"),
      f("مهمة الروبوتات الصناعية (كهرباء)", "/resources/Engineering/resource_165.docx", "doc"),
    ],
    teacherGuide: [
      f("دليل المعلم — المتحكمات المنطقية القابلة للبرمجة (كهرباء)", "/resources/Engineering/resource_166.docx", "doc"),
      f("دليل المعلم — الروبوتات الصناعية (كهرباء)", "/resources/Engineering/resource_167.docx", "doc"),
    ],
  }),
};

const grade12Mechanics = {
  semester1: S({
    specs: [
      f("(تخصص الميكانيك) جدول المواصفات — تقنية اللحام", G12_ME_SPEC),
      f("(تخصص الميكانيك) جدول المواصفات — صيانة الأنظمة الميكانيكية", G12_ME_SPEC),
    ],
    books: [
      f("(تخصص الميكانيك) كتاب تقنية اللحام", "/resources/Engineering/resource_168.pdf"),
      f("(تخصص الميكانيك) كتاب صيانة الأنظمة الميكانيكية", "/resources/Engineering/resource_169.pdf"),
    ],
    explanations: [
      f("شرح + سلايدات — تقنية اللحام (ميكانيك)", "/resources/Engineering/resource_170.pptx", "presentation"),
      f("شرح + سلايدات — صيانة الأنظمة الميكانيكية (ميكانيك)", "/resources/Engineering/resource_171.pptx", "presentation"),
    ],
    assignments: [
      f("مهمة تقنية اللحام (ميكانيك)", "/resources/Engineering/resource_172.docx", "doc"),
      f("مهمة صيانة الأنظمة الميكانيكية (ميكانيك)", "/resources/Engineering/resource_173.docx", "doc"),
    ],
    teacherGuide: [
      f("دليل المعلم — تقنية اللحام (ميكانيك)", "/resources/Engineering/resource_174.docx", "doc"),
      f("دليل المعلم — صيانة الأنظمة الميكانيكية (ميكانيك)", "/resources/Engineering/resource_175.docx", "doc"),
    ],
  }),
  semester2: S({
    specs: [
      f("(تخصص الميكانيك) جدول المواصفات — السلوك الميكانيكي للمواد المعدنية", G12_ME_SPEC),
      f("(تخصص الميكانيك) جدول المواصفات — السلوك الميكانيكي للمواد غير المعدنية", G12_ME_SPEC),
    ],
    books: [
      f("(تخصص الميكانيك) كتاب السلوك الميكانيكي للمواد المعدنية", "/resources/Engineering/resource_176.pdf"),
      f("(تخصص الميكانيك) كتاب السلوك الميكانيكي للمواد غير المعدنية", "/resources/Engineering/resource_177.pdf"),
    ],
    explanations: [
      f("شرح + سلايدات — السلوك الميكانيكي للمواد المعدنية (ميكانيك)", "/resources/Engineering/resource_178.pptx", "presentation"),
      f("شرح + سلايدات — السلوك الميكانيكي للمواد غير المعدنية (ميكانيك)", "/resources/Engineering/resource_179.pptx", "presentation"),
    ],
    assignments: [
      f("مهمة السلوك الميكانيكي للمواد المعدنية (ميكانيك)", "/resources/Engineering/resource_180.docx", "doc"),
      f("مهمة السلوك الميكانيكي للمواد غير المعدنية (ميكانيك)", "/resources/Engineering/resource_181.docx", "doc"),
    ],
    teacherGuide: [
      f("دليل المعلم — السلوك الميكانيكي للمواد المعدنية (ميكانيك)", "/resources/Engineering/resource_182.docx", "doc"),
      f("دليل المعلم — السلوك الميكانيكي للمواد غير المعدنية (ميكانيك)", "/resources/Engineering/resource_183.docx", "doc"),
    ],
  }),
  semester3: S({
    specs: [
      f("(تخصص الميكانيك) جدول المواصفات — عمليات المعالجة الآلية الثانوية المستخدمة في التصنيع", G12_ME_SPEC),
      f("(تخصص الميكانيك) جدول المواصفات — عمليات التصنيع والتجميع", G12_ME_SPEC),
    ],
    books: [
      f("(تخصص الميكانيك) كتاب عمليات المعالجة الآلية الثانوية المستخدمة في التصنيع", "/resources/Engineering/resource_184.pdf"),
      f("(تخصص الميكانيك) كتاب عمليات التصنيع والتجميع", "/resources/Engineering/resource_185.pdf"),
      f("(تخصص الميكانيك) كتاب عمليات المعالجة الآلية الثانوية (نسخة إضافية)", "/resources/Engineering/resource_186.pdf"),
    ],
    explanations: [
      f("شرح + سلايدات — عمليات المعالجة الآلية الثانوية (ميكانيك)", "/resources/Engineering/resource_187.pptx", "presentation"),
      f("شرح + سلايدات — المعالجة التصنيعية باستخدام التحكم العددي (ميكانيك)", "/resources/Engineering/resource_188.pptx", "presentation"),
    ],
    assignments: [
      f("مهمة عمليات المعالجة الآلية الثانوية المستخدمة في التصنيع (ميكانيك)", "/resources/Engineering/resource_189.docx", "doc"),
    ],
    teacherGuide: [
      f("دليل المعلم — عمليات المعالجة الآلية الثانوية المستخدمة في التصنيع (ميكانيك)", "/resources/Engineering/resource_190.docx", "doc"),
    ],
  }),
};

const grade12Vehicle = {
  semester1: S({
    specs: [
      f("(تخصص تكنولوجيا المركبات) جدول المواصفات — محركات المركبات الكهربائية والهجينة", G12_VT_SPEC),
      f("(تخصص تكنولوجيا المركبات) جدول المواصفات — أنظمة الدفع في المركبات الكهربائية", G12_VT_SPEC),
    ],
    books: [
      f("(تخصص تكنولوجيا المركبات) كتاب محركات المركبات الكهربائية والهجينة", "/resources/Engineering/resource_141.pdf"),
      f("(تخصص تكنولوجيا المركبات) كتاب أنظمة الدفع في المركبات الكهربائية", "/resources/Engineering/resource_143.pdf"),
    ],
    explanations: [
      f("شرح + سلايدات — محركات المركبات الكهربائية والهجينة (تكنولوجيا المركبات)", "/resources/Engineering/resource_193.pptx", "presentation"),
      f("شرح + سلايدات — أنظمة الدفع في المركبات الكهربائية (تكنولوجيا المركبات)", "/resources/Engineering/resource_194.pptx", "presentation"),
    ],
    assignments: [
      f("مهمة محركات المركبات الكهربائية والهجينة (تكنولوجيا المركبات)", "/resources/Engineering/resource_195.docx", "doc"),
      f("مهمة أنظمة الدفع في المركبات الكهربائية (تكنولوجيا المركبات)", "/resources/Engineering/resource_196.docx", "doc"),
    ],
    teacherGuide: [
      f("دليل المعلم — محركات المركبات الكهربائية والهجينة (تكنولوجيا المركبات)", "/resources/Engineering/resource_197.docx", "doc"),
      f("دليل المعلم — أنظمة الدفع في المركبات الكهربائية (تكنولوجيا المركبات)", "/resources/Engineering/resource_198.docx", "doc"),
    ],
  }),
  semester2: S({
    specs: [
      f("(تخصص تكنولوجيا المركبات) جدول المواصفات — التنقل الكهربي", G12_VT_SPEC),
      f("(تخصص تكنولوجيا المركبات) جدول المواصفات — تشغيل أنظمة الإشعال الإلكترونية في المركبات واختبارها", G12_VT_SPEC),
    ],
    books: [
      f("(تخصص تكنولوجيا المركبات) كتاب التنقل الكهربي", "/resources/Engineering/resource_151.pdf"),
      f("(تخصص تكنولوجيا المركبات) كتاب تشغيل أنظمة الإشعال الإلكترونية في المركبات واختبارها", "/resources/Engineering/resource_153.pdf"),
    ],
    explanations: [
      f("شرح + سلايدات — التنقل الكهربي (تكنولوجيا المركبات)", "/resources/Engineering/resource_201.pptx", "presentation"),
      f("شرح + سلايدات — تشغيل أنظمة الإشعال الإلكترونية (تكنولوجيا المركبات)", "/resources/Engineering/resource_202.pptx", "presentation"),
    ],
    assignments: [
      f("مهمة التنقل الكهربي (تكنولوجيا المركبات)", "/resources/Engineering/resource_203.docx", "doc"),
      f("مهمة تشغيل أنظمة الإشعال الإلكترونية في المركبات واختبارها (تكنولوجيا المركبات)", "/resources/Engineering/resource_204.docx", "doc"),
    ],
    teacherGuide: [
      f("دليل المعلم — التنقل الكهربي (تكنولوجيا المركبات)", "/resources/Engineering/resource_198.docx", "doc"),
      f("دليل المعلم — تشغيل أنظمة الإشعال الإلكترونية في المركبات واختبارها (تكنولوجيا المركبات)", "/resources/Engineering/resource_206.docx", "doc"),
    ],
  }),
  semester3: S({
    specs: [
      f("(تخصص تكنولوجيا المركبات) جدول المواصفات — أنظمة التعليق والتوجيه والكبح في المركبات الخفيفة", G12_VT_SPEC),
      f("(تخصص تكنولوجيا المركبات) جدول المواصفات — تشغيل أنظمة نقل الحركة في المركبات الخفيفة وصيانتها", G12_VT_SPEC),
    ],
    books: [
      f("(تخصص تكنولوجيا المركبات) كتاب أنظمة التعليق والتوجيه والكبح في المركبات الخفيفة", "/resources/Engineering/resource_158.pdf"),
      f("(تخصص تكنولوجيا المركبات) كتاب تشغيل أنظمة نقل الحركة في المركبات الخفيفة وصيانتها", "/resources/Engineering/resource_160.pdf"),
    ],
    explanations: [
      f("شرح + سلايدات — أنظمة التعليق والتوجيه والكبح (تكنولوجيا المركبات)", "/resources/Engineering/resource_209.pptx", "presentation"),
      f("شرح + سلايدات — تشغيل أنظمة نقل الحركة وصيانتها (تكنولوجيا المركبات)", "/resources/Engineering/resource_210.pptx", "presentation"),
    ],
    assignments: [
      f("مهمة أنظمة التعليق والتوجيه والكبح في المركبات الخفيفة (تكنولوجيا المركبات)", "/resources/Engineering/resource_211.docx", "doc"),
      f("مهمة تشغيل أنظمة نقل الحركة في المركبات الخفيفة وصيانتها (تكنولوجيا المركبات)", "/resources/Engineering/resource_212.docx", "doc"),
    ],
    teacherGuide: [
      f("دليل المعلم — أنظمة التعليق والتوجيه والكبح في المركبات الخفيفة (تكنولوجيا المركبات)", "/resources/Engineering/resource_213.docx", "doc"),
      f("دليل المعلم — تشغيل أنظمة نقل الحركة في المركبات الخفيفة وصيانتها (تكنولوجيا المركبات)", "/resources/Engineering/resource_214.docx", "doc"),
    ],
  }),
};

export const ENGINEERING_RESOURCES = {
  grade10,
  grade11,
  grade12: emptyG12,
  grade12ByTrack: {
    electrical: grade12Electrical,
    mechanics: grade12Mechanics,
    vehicle: grade12Vehicle,
  },
};

export const ENGINEERING_TRACK_LABELS: Record<string, string> = {
  electrical: "تخصص الكهرباء",
  mechanics: "تخصص الميكانيك",
  vehicle: "تخصص تكنولوجيا المركبات",
};
