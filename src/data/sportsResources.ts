import type { DepartmentResources, GradeData, SemesterData, ResourceFile } from "./assistanceResources";

const SPECS_URL = "/MKQ-btec/resources/Sports/resource_244.pdf";

const UNITS = [
  {
    key: "u1",
    title: "الوحدة 1: مبادئ اللياقة البدنية واختبارات اللياقة البدنية",
    book: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%201_%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D9%84%D9%8A%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%A8%D8%AF%D9%86%D9%8A%D8%A9%20%D9%88%D8%A7%D8%AE%D8%AA%D8%A8%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%84%D9%8A%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%A8%D8%AF%D9%86%D9%8A%D8%A9.pdf",
    explanation: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%201_%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D9%84%D9%8A%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%A8%D8%AF%D9%86%D9%8A%D8%A9%20%D9%88%D8%A7%D8%AE%D8%AA%D8%A8%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%84%D9%8A%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%A8%D8%AF%D9%86%D9%8A%D8%A9.pptx",
    assignment: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%201_%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D9%84%D9%8A%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%A8%D8%AF%D9%86%D9%8A%D8%A9%20%D9%88%D8%A7%D8%AE%D8%AA%D8%A8%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D9%84%D9%8A%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%A8%D8%AF%D9%86%D9%8A%D8%A9.docx",
    teacher: "/MKQ-btec/resources/Sports/resource_248.docx",
  },
  {
    key: "u2",
    title: "الوحدة 2: التدريب للتمتع باللياقة البدنية الشخصية",
    book: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%202_%20%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%20%D9%84%D9%84%D8%AA%D9%85%D8%AA%D8%B9%20%D8%A8%D8%A7%D9%84%D9%84%D9%8A%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%A8%D8%AF%D9%86%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9.pdf",
    explanation: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%202_%20%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%20%D9%84%D9%84%D8%AA%D9%85%D8%AA%D8%B9%20%D8%A8%D8%A7%D9%84%D9%84%D9%8A%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%A8%D8%AF%D9%86%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9.pptx",
    assignment: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%202_%20%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%20%D9%84%D9%84%D8%AA%D9%85%D8%AA%D8%B9%20%D8%A8%D8%A7%D9%84%D9%84%D9%8A%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%A8%D8%AF%D9%86%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9.docx",
    teacher: "/MKQ-btec/resources/Sports/resource_252.docx",
  },
  {
    key: "u3",
    title: "الوحدة 3: مهارات الأعمال التجارية في مجال الرياضة",
    book: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%203_%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.pdf",
    explanation: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%203_%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.pptx",
    assignment: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%203_%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.docx",
    teacher: "/MKQ-btec/resources/Sports/resource_256.docx",
  },
  {
    key: "u4",
    title: "الوحدة 4: التطوير في مجال الرياضة",
    book: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%204_%20%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.pdf",
    explanation: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%204_%20%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.pptx",
    assignment: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%204_%20%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.docx",
    teacher: "/MKQ-btec/resources/Sports/resource_260.docx",
  },
  {
    key: "u5",
    title: "الوحدة 5: الرياضة التطبيقية",
    book: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%205_%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D9%8A%D8%A9.pdf",
    explanation: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%205_%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D9%8A%D8%A9.pptx",
    assignment: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%205_%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D9%8A%D8%A9.docx",
    teacher: "/MKQ-btec/resources/Sports/resource_264.docx",
  },
  {
    key: "u6",
    title: "الوحدة 6: القيادة في مجال الرياضة",
    book: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%206_%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.pdf",
    explanation: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%206_%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.pptx",
    assignment: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%206_%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.docx",
    teacher: "/MKQ-btec/resources/Sports/resource_268.docx",
  },
  {
    key: "u7",
    title: "الوحدة 7: علم التشريح وعلم وظائف الأعضاء في مجال الرياضة",
    book: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%207_%20%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%AD%20%D9%88%D8%B9%D9%84%D9%85%20%D9%88%D8%B8%D8%A7%D8%A6%D9%81%20%D8%A7%D9%84%D8%A3%D8%B9%D8%B6%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.pdf",
    explanation: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%207_%20%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%AD%20%D9%88%D8%B9%D9%84%D9%85%20%D9%88%D8%B8%D8%A7%D8%A6%D9%81%20%D8%A7%D9%84%D8%A3%D8%B9%D8%B6%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.pptx",
    assignment: "/MKQ-btec/resources/Sports/%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A9%207_%20%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%AA%D8%B4%D8%B1%D9%8A%D8%AD%20%D9%88%D8%B9%D9%84%D9%85%20%D9%88%D8%B8%D8%A7%D8%A6%D9%81%20%D8%A7%D9%84%D8%A3%D8%B9%D8%B6%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9.docx",
    teacher: "/MKQ-btec/resources/Sports/resource_272.docx",
  },
];

const sem1: SemesterData = {
  specs: {
    files: UNITS.map<ResourceFile>((u) => ({
      name: `جدول المواصفات ${u.title}`,
      url: SPECS_URL,
      type: "pdf",
    })),
  },
  books: {
    files: UNITS.map<ResourceFile>((u) => ({ name: `كتاب ${u.title}`, url: u.book, type: "pdf" })),
  },
  explanations: {
    files: UNITS.map<ResourceFile>((u) => ({
      name: `شرح + سلايدات ${u.title}`,
      url: u.explanation,
      type: "presentation",
    })),
  },
  assignments: {
    files: UNITS.map<ResourceFile>((u) => ({ name: `مهمة ${u.title}`, url: u.assignment, type: "doc" })),
  },
  teacherGuide: {
    files: UNITS.map<ResourceFile>((u) => ({
      name: `دليل المعلم ${u.title}`,
      url: u.teacher,
      type: "doc",
    })),
  },
};

const emptySemester: SemesterData = {
  specs: { files: [] },
  books: { files: [] },
  explanations: { files: [] },
  teacherGuide: { files: [] },
  assignments: { files: [] },
};

export const SPORTS_RESOURCES: DepartmentResources = {
  grade10: {
    semester1: sem1,
    semester2: { ...emptySemester },
    semester3: { ...emptySemester },
  },
  grade11: {
    semester1: { ...emptySemester },
    semester2: { ...emptySemester },
    semester3: { ...emptySemester },
  },
  grade12: {
    semester1: { ...emptySemester },
    semester2: { ...emptySemester },
    semester3: { ...emptySemester },
  },
};
