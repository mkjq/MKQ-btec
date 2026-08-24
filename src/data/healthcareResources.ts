import type { DepartmentResources, GradeData, SemesterData, ResourceFile } from "./assistanceResources";

// روابط متكررة لجميع الفصول في الرعاية الصحية للصف العاشر
const SPECS_URL = "/resources/Healthcare/resource_215.pdf";

const BOOKS: Record<string, string> = {
  u1: "/resources/Healthcare/resource_216.pdf",
  u2: "/resources/Healthcare/resource_217.pdf",
  u3: "/resources/Healthcare/resource_218.pdf",
  u4: "/resources/Healthcare/resource_219.pdf",
  u5: "/resources/Healthcare/resource_220.pdf",
  u7: "/resources/Healthcare/resource_221.pdf",
  u8: "/resources/Healthcare/resource_222.pdf",
};

const EXPLANATIONS: Record<string, string> = {
  u1: "/resources/Healthcare/resource_223.pptx",
  u2: "/resources/Healthcare/resource_224.pptx",
  u3: "/resources/Healthcare/resource_225.pptx",
  u4: "/resources/Healthcare/resource_226.pptx",
  u5: "/resources/Healthcare/resource_227.pptx",
  u7: "/resources/Healthcare/resource_228.pptx",
  u8: "/resources/Healthcare/resource_229.pptx",
};

const ASSIGNMENTS: Record<string, string> = {
  u1: "/resources/Healthcare/resource_230.docx",
  u2: "/resources/Healthcare/resource_231.docx",
  u3: "/resources/Healthcare/resource_232.docx",
  u4: "/resources/Healthcare/resource_233.docx",
  u5: "/resources/Healthcare/resource_233.docx",
  u7: "/resources/Healthcare/resource_235.docx",
  u8: "/resources/Healthcare/resource_236.docx",
};

const TEACHER: Record<string, string> = {
  u1: "/resources/Healthcare/resource_237.docx",
  u2: "/resources/Healthcare/resource_238.docx",
  u3: "/resources/Healthcare/resource_239.docx",
  u4: "/resources/Healthcare/resource_240.docx",
  u5: "/resources/Healthcare/resource_241.docx",
  u7: "/resources/Healthcare/resource_242.docx",
  u8: "/resources/Healthcare/resource_243.docx",
};

const UNITS: Array<{ key: keyof typeof BOOKS; title: string }> = [
  { key: "u1", title: "الوحدة 1: تطوّر الإنسان خلال مراحل الحياة" },
  { key: "u2", title: "الوحدة 2: التمتع بحياة صحية" },
  { key: "u3", title: "الوحدة 3: المهارات والخصائص والقيم اللازمة لتقديم الرعاية" },
  { key: "u4", title: "الوحدة 4: توفير البيئات الآمنة في الرعاية الصحية والاجتماعية" },
  { key: "u5", title: "الوحدة 5: الخبرة المهنية في مجال الرعاية الصحية أو الاجتماعية" },
  { key: "u7", title: "الوحدة 7: علم التشريح وعلم وظائف الأعضاء للرعاية الصحية والاجتماعية" },
  { key: "u8", title: "الوحدة 8: النشاطات الإبداعية والعلاجية في مجال الرعاية الصحية والاجتماعية" },
];

const buildSemester = (): SemesterData => {
  const specs: ResourceFile[] = UNITS.map((u) => ({
    name: `جدول المواصفات ${u.title}`,
    url: SPECS_URL,
    type: "pdf",
  }));
  const books: ResourceFile[] = UNITS.map((u) => ({
    name: `كتاب ${u.title}`,
    url: BOOKS[u.key],
    type: "pdf",
  }));
  const explanations: ResourceFile[] = UNITS.map((u) => ({
    name: `شرح + سلايدات ${u.title}`,
    url: EXPLANATIONS[u.key],
    type: "presentation",
  }));
  const assignments: ResourceFile[] = UNITS.map((u) => ({
    name: `مهمة ${u.title}`,
    url: ASSIGNMENTS[u.key],
    type: "doc",
  }));
  const teacherGuide: ResourceFile[] = UNITS.map((u) => ({
    name: `دليل المعلم ${u.title}`,
    url: TEACHER[u.key],
    type: "doc",
  }));
  return {
    specs: { files: specs },
    books: { files: books },
    explanations: { files: explanations },
    teacherGuide: { files: teacherGuide },
    assignments: { files: assignments },
  };
};

const grade10: GradeData = {
  semester1: buildSemester(),
  semester2: buildSemester(),
  semester3: buildSemester(),
};

const emptySemester: SemesterData = {
  specs: { files: [] },
  books: { files: [] },
  explanations: { files: [] },
  teacherGuide: { files: [] },
  assignments: { files: [] },
};
const emptyGrade: GradeData = {
  semester1: { ...emptySemester },
  semester2: { ...emptySemester },
  semester3: { ...emptySemester },
};

export const HEALTHCARE_RESOURCES: DepartmentResources = {
  grade10,
  grade11: JSON.parse(JSON.stringify(emptyGrade)),
  grade12: JSON.parse(JSON.stringify(emptyGrade)),
};
