import { ENGINEERING_RESOURCES } from "./engineeringResources";
import { HEALTHCARE_RESOURCES } from "./healthcareResources";
import { SPORTS_RESOURCES } from "./sportsResources";
import { BEAUTY_RESOURCES } from "./beautyResources";

export interface ResourceFile {
  name: string;
  url: string;
  type: "pdf" | "doc" | "presentation" | "folder";
}

export interface CategoryData {
  files: ResourceFile[];
}

export interface SemesterData {
  books: CategoryData;
  specs: CategoryData;
  explanations: CategoryData;
  teacherGuide: CategoryData;
  assignments: CategoryData;
}

export interface GradeData {
  semester1: SemesterData;
  semester2: SemesterData;
  semester3: SemesterData;
}

export interface DepartmentResources {
  grade10: GradeData;
  grade11: GradeData;
  grade12: GradeData;
  /** مسارات فرعية (مثل هندسة الصف الثاني ثانوي: كهرباء / ميكانيك / تكنولوجيا المركبات) */
  grade12ByTrack?: Record<string, GradeData>;
}

const emptySemester: SemesterData = {
  books: { files: [] },
  specs: { files: [] },
  explanations: { files: [] },
  teacherGuide: { files: [] },
  assignments: { files: [] },
};

const emptyGrade: GradeData = {
  semester1: { ...emptySemester, books: { files: [] }, specs: { files: [] }, explanations: { files: [] }, teacherGuide: { files: [] }, assignments: { files: [] } },
  semester2: { ...emptySemester, books: { files: [] }, specs: { files: [] }, explanations: { files: [] }, teacherGuide: { files: [] }, assignments: { files: [] } },
  semester3: { ...emptySemester, books: { files: [] }, specs: { files: [] }, explanations: { files: [] }, teacherGuide: { files: [] }, assignments: { files: [] } },
};

const emptyDepartment: DepartmentResources = {
  grade10: JSON.parse(JSON.stringify(emptyGrade)),
  grade11: JSON.parse(JSON.stringify(emptyGrade)),
  grade12: JSON.parse(JSON.stringify(emptyGrade)),
};

export const resourcesData: Record<string, DepartmentResources> = {
  it: {
    grade10: {
      semester1: {
        books: { files: [
          { name: "كتاب استخدام تكنولوجيا المعلومات لدعم المعلومات في المنظمات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D9%86%D8%B8%D9%85%D8%A7%D8%AA.pdf", type: "pdf" },
          { name: "كتاب نمذجة البيانات وجداول البيانات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%86%D9%85%D8%B0%D8%AC%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20%D9%88%D8%AC%D8%AF%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA.pdf", type: "pdf" },
        ]},
        specs: { files: [
          { name: "جدول المواصفات استخدام تكنولوجيا المعلومات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA.pdf", type: "pdf" },
          { name: "جدول مواصفات نمذجة البيانات وجداول البيانات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%86%D9%85%D8%B0%D8%AC%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20%D9%88%D8%AC%D8%AF%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA.pdf", type: "pdf" },
        ]},
        explanations: { files: [
          { name: "طريقة عمل قاعدة بيانات SQL", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%B9%D9%85%D9%84%20%D9%82%D8%A7%D8%B9%D8%AF%D8%A9%20%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20SQL.pptx", type: "presentation" },
          { name: "قالب حل + شرح مهمة استخدام تكنولوجيا المعلومات (أ + ب + ج)", url: "/resources/IT_and_General/%D9%82%D8%A7%D9%84%D8%A8%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20(%D8%A3%20+%20%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
          { name: "قالب حل + شرح مهمة نمذجة البيانات وجداول البيانات (أ + ب + ج)", url: "/resources/IT_and_General/%D9%82%D8%A7%D9%84%D8%A8%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D9%86%D9%85%D8%B0%D8%AC%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20%D9%88%D8%AC%D8%AF%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20(%D8%A3%20+%20%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
        ]},
        teacherGuide: { files: [
          { name: "دليل المعلم استخدام تكنولوجيا المعلومات لدعم المعلومات في المنظمات", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D9%86%D8%B8%D9%85%D8%A7%D8%AA.pdf", type: "pdf" },
          { name: "دليل المعلم نمذجة البيانات وجداول البيانات", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%86%D9%85%D8%B0%D8%AC%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20%D9%88%D8%AC%D8%AF%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA.pdf", type: "pdf" },
        ]},
        assignments: { files: [
          { name: "طريقة حل مهمة قواعد البيانات SQL", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D9%82%D9%88%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20SQL.docx", type: "doc" },
          { name: "مهمة استخدام تكنولوجيا المعلومات لدعم المعلومات في المنظمات", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D9%86%D8%B8%D9%85%D8%A7%D8%AA.pdf", type: "pdf" },
          { name: "مهمة نمذجة البيانات وجداول البيانات", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%86%D9%85%D8%B0%D8%AC%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20%D9%88%D8%AC%D8%AF%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA.pdf", type: "pdf" },
        ]},
      },
      semester2: {
        books: { files: [
          { name: "كتاب مقدمة إلى شبكات الكمبيوتر", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1.pdf", type: "pdf" },
          { name: "كتاب مقدمة في البرمجة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9.pdf", type: "pdf" },
          { name: "كتاب مقدمة للرسومات الرقمية والرسوم المتحركة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D9%84%D8%B1%D8%B3%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%B1%D9%83%D8%A9.pdf", type: "pdf" },
        ]},
        specs: { files: [
          { name: "جدول المواصفات مقدمة إلى شبكات الكمبيوتر", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1.pdf", type: "pdf" },
          { name: "جدول المواصفات مقدمة في البرمجة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9.pdf", type: "pdf" },
          { name: "جدول المواصفات مقدمة للرسومات الرقمية والرسوم المتحركة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D9%84%D8%B1%D8%B3%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%B1%D9%83%D8%A9.pdf", type: "pdf" },
        ]},
        explanations: { files: [
          { name: "قالب حل + شرح مهمة مقدمة إلى شبكات الكمبيوتر (أ)", url: "/resources/IT_and_General/%D9%82%D8%A7%D9%84%D8%A8%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1%20(%D8%A3).pdf", type: "pdf" },
          { name: "قالب حل + شرح مهمة مقدمة إلى شبكات الكمبيوتر (ب + ج)", url: "/resources/IT_and_General/%D9%82%D8%A7%D9%84%D8%A8%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
          { name: "قالب حل + شرح مهمة مقدمة في البرمجة (أ)", url: "/resources/IT_and_General/%D9%82%D8%A7%D9%84%D8%A8%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%20(%D8%A3).pdf", type: "pdf" },
          { name: "قالب حل + شرح مهمة مقدمة في البرمجة (ب + ج)", url: "/resources/IT_and_General/%D9%82%D8%A7%D9%84%D8%A8%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
          { name: "قالب حل + شرح مهمة مقدمة للرسومات الرقمية والرسوم المتحركة (أ)", url: "https://drive.google.com/drive/folders/1OWoGqMoI-8ODuawBW8ErfVBn7BUgoaIb", type: "folder" },
          { name: "قالب حل + شرح مهمة مقدمة للرسومات الرقمية والرسوم المتحركة (ب + ج)", url: "https://drive.google.com/drive/folders/1VXxJLlzpINzdNlR2pfRr02bEybPT-oAW", type: "folder" },
        ]},
        teacherGuide: { files: [
          { name: "دليل المعلم مقدمة إلى شبكات الكمبيوتر (أ)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1%20(%D8%A3).pdf", type: "pdf" },
          { name: "دليل المعلم مقدمة في البرمجة (أ)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%20(%D8%A3).pdf", type: "pdf" },
          { name: "دليل المعلم مقدمة في البرمجة (ب + ج)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
          { name: "دليل المعلم مقدمة للرسومات الرقمية والرسوم المتحركة (أ)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D9%84%D8%B1%D8%B3%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%B1%D9%83%D8%A9%20(%D8%A3).pdf", type: "pdf" },
          { name: "دليل المعلم مقدمة للرسومات الرقمية والرسوم المتحركة (ب + ج)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D9%84%D8%B1%D8%B3%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%B1%D9%83%D8%A9%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
        ]},
        assignments: { files: [
          { name: "مهمة مقدمة إلى شبكات الكمبيوتر (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1%20(%D8%A3).docx", type: "doc" },
          { name: "مهمة مقدمة إلى شبكات الكمبيوتر (ب + ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1%20(%D8%A8%20+%20%D8%AC).docx", type: "doc" },
          { name: "مهمة مقدمة في البرمجة (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%20(%D8%A3).docx", type: "doc" },
          { name: "مهمة مقدمة في البرمجة (ب + ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
          { name: "مهمة مقدمة للرسومات الرقمية والرسوم المتحركة (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D9%84%D8%B1%D8%B3%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%B1%D9%83%D8%A9%20(%D8%A3).docx", type: "doc" },
          { name: "مهمة مقدمة للرسومات الرقمية والرسوم المتحركة (ب + ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D9%84%D8%B1%D8%B3%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%85%20%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%B1%D9%83%D8%A9%20(%D8%A8%20+%20%D8%AC).docx", type: "doc" },
        ]},
      },
      semester3: {
        books: { files: [
          { name: "كتاب مقدمة لتطوير مواقع الويب", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D9%88%D9%8A%D8%A8.pdf", type: "pdf" },
          { name: "كتاب مقدمة في التطبيقات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA.pdf", type: "pdf" },
          { name: "كتاب مقدمة في تصميم الألعاب", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8.pdf", type: "pdf" },
        ]},
        specs: { files: [
          { name: "جدول المواصفات مقدمة لتطوير مواقع الويب", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D9%88%D9%8A%D8%A8.pdf", type: "pdf" },
          { name: "جدول المواصفات مقدمة في التطبيقات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA.pdf", type: "pdf" },
          { name: "جدول المواصفات مقدمة في تصميم الألعاب", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8.pdf", type: "pdf" },
        ]},
        explanations: { files: [
          { name: "طريقة حل مهمة مقدمة لتطوير مواقع الويب هدف (أ)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D9%88%D9%8A%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
          { name: "طريقة حل مهمة مقدمة في التطبيقات هدف (أ)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
          { name: "طريقة حل مهمة مقدمة في تصميم الألعاب هدف (أ)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
          { name: "جميع المساعدات لمهمة مقدمة في تصميم الألعاب هدف (ب + ج)", url: "/resources/IT_and_General/%D8%AC%D9%85%D9%8A%D8%B9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A7%D8%AA%20%D9%84%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
          { name: "طريقة حل مهمة مقدمة في التطبيقات هدف (ب + ج)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
          { name: "طريقة حل مهمة مقدمة لتطوير مواقع الويب هدف (ب+ج)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D9%88%D9%8A%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A8+%D8%AC).pdf", type: "pdf" },
        ]},
        teacherGuide: { files: [
          { name: "دليل المعلم مقدمة لتطوير مواقع الويب هدف (أ)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D9%88%D9%8A%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
          { name: "دليل المعلم مقدمة لتطوير مواقع الويب هدف (ب + ج)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D9%88%D9%8A%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
          { name: "دليل المعلم مقدمة في التطبيقات هدف (أ)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
          { name: "دليل المعلم مقدمة في التطبيقات هدف (ب + ج)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
          { name: "دليل المعلم مقدمة في تصميم الألعاب هدف (أ)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
          { name: "دليل المعلم مقدمة في تصميم الألعاب هدف (ب + ج)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
        ]},
        assignments: { files: [
          { name: "مهمة متقدمة لتطوير مواقع الويب للصف العاشر (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D8%AA%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D9%88%D9%8A%D8%A8%20%D9%84%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1%20(%D8%A3).docx", type: "doc" },
          { name: "مهمة مقدمة في التطبيقات هدف (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A3).docx", type: "doc" },
          { name: "مهمة مقدمة في تصميم الألعاب هدف (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A3).docx", type: "doc" },
          { name: "مهمة مقدمة في تصميم الألعاب هدف (ب+ج) للصف العاشر", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A8+%D8%AC)%20%D9%84%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1.docx", type: "doc" },
          { name: "مهمة متقدمة لتطوير مواقع الويب للصف العاشر (ب + ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D8%AA%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D9%88%D9%8A%D8%A8%20%D9%84%D9%84%D8%B5%D9%81%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1%20(%D8%A8%20+%20%D8%AC).docx", type: "doc" },
          { name: "مهمة مقدمة في التطبيقات هدف (ب + ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC).docx", type: "doc" },
        ]},
      },
    },
    grade11: {
      semester1: {
        books: { files: [
          { name: "كتاب أنظمة تكنولوجيا المعلومات الإستراتيجية", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9.pdf", type: "pdf" },
        ]},
        specs: { files: [
          { name: "جدول المواصفات أنظمة تكنولوجيا المعلومات الإستراتيجية", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9.pdf", type: "pdf" },
        ]},
        explanations: { files: [
          { name: "طريقة حل + شرح مهمة أنظمة تكنولوجيا المعلومات الإستراتيجية هدف (أ + ب + ج + د)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9%20%D9%87%D8%AF%D9%81%20(%D8%A3%20+%20%D8%A8%20+%20%D8%AC%20+%20%D8%AF).pptx", type: "presentation" },
        ]},
        teacherGuide: { files: [
          { name: "دليل المعلم أنظمة تكنولوجيا المعلومات الإستراتيجية", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9.pdf", type: "pdf" },
        ]},
        assignments: { files: [
          { name: "مهمة أنظمة تكنولوجيا المعلومات الإستراتيجية هدف (أ + ب + ج + د)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9%20%D9%87%D8%AF%D9%81%20(%D8%A3%20+%20%D8%A8%20+%20%D8%AC%20+%20%D8%AF).pdf", type: "pdf" },
        ]},
      },
      semester2: {
        books: { files: [
          { name: "كتاب تطوير المواقع الإلكترونية", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9.pdf", type: "pdf" },
          { name: "كتاب تطوير تطبيقات الهاتف المحمول", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D8%A7%D8%AA%D9%81%20%D8%A7%D9%84%D9%85%D8%AD%D9%85%D9%88%D9%84.pdf", type: "pdf" },
        ]},
        specs: { files: [
          { name: "جدول مواصفات تطوير المواقع الإلكترونية", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9.pdf", type: "pdf" },
          { name: "جدول المواصفات تطوير تطبيقات الهاتف المحمول", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D8%A7%D8%AA%D9%81%20%D8%A7%D9%84%D9%85%D8%AD%D9%85%D9%88%D9%84.pdf", type: "pdf" },
        ]},
        explanations: { files: [
          { name: "طريقة حل + شرح مهمة تطوير المواقع الإلكترونية (أ)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9%20(%D8%A3).pdf", type: "pdf" },
          { name: "طريقة حل + شرح مهمة تطوير المواقع الإلكترونية (ب + ج)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
          { name: "قالب حل + شرح مهمة تطوير تطبيقات الهاتف المحمول (أ)", url: "/resources/IT_and_General/%D9%82%D8%A7%D9%84%D8%A8%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D8%A7%D8%AA%D9%81%20%D8%A7%D9%84%D9%85%D8%AD%D9%85%D9%88%D9%84%20(%D8%A3).pdf", type: "pdf" },
          { name: "قالب حل + شرح مهمة تطوير تطبيقات الهاتف المحمول (ب + ج)", url: "https://drive.google.com/drive/folders/1-UJOOsFHIPfQoqeuIXSPQ0JacNNIT6Ud", type: "folder" },
        ]},
        teacherGuide: { files: [
          { name: "دليل المعلم تطوير المواقع الإلكترونية", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9.pdf", type: "pdf" },
          { name: "دليل المعلم تطوير تطبيقات الهاتف المحمول (أ)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D8%A7%D8%AA%D9%81%20%D8%A7%D9%84%D9%85%D8%AD%D9%85%D9%88%D9%84%20(%D8%A3).pdf", type: "pdf" },
          { name: "دليل المعلم تطوير تطبيقات الهاتف المحمول (ب + ج)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D8%A7%D8%AA%D9%81%20%D8%A7%D9%84%D9%85%D8%AD%D9%85%D9%88%D9%84%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
        ]},
        assignments: { files: [
          { name: "مهمة تطوير المواقع الاكترونية هدف (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D8%A7%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
          { name: "مهمة تطوير تطبيقات الهاتف المحمول (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D8%A7%D8%AA%D9%81%20%D8%A7%D9%84%D9%85%D8%AD%D9%85%D9%88%D9%84%20(%D8%A3).docx", type: "doc" },
          { name: "مهمة تطوير تطبيقات الهاتف المحمول (ب + ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D9%87%D8%A7%D8%AA%D9%81%20%D8%A7%D9%84%D9%85%D8%AD%D9%85%D9%88%D9%84%20(%D8%A8%20+%20%D8%AC).docx", type: "doc" },
          { name: "مهمة تطوير المواقع الاكترونية هدف (ب + ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9%20%D8%A7%D9%84%D8%A7%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
        ]},
      },
      semester3: {
        books: { files: [
          { name: "كتاب الدعم الفني وإدارة تكنولوجيا المعلومات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%81%D9%86%D9%8A%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA.pdf", type: "pdf" },
          { name: "كتاب تطوير ألعاب الحاسوب", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8.pdf", type: "pdf" },
        ]},
        specs: { files: [
          { name: "جدول المواصفات الدعم الفني وإدارة تكنولوجيا المعلومات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%81%D9%86%D9%8A%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA.pdf", type: "pdf" },
          { name: "جدول مواصفات تطوير ألعاب الحاسوب", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8.pdf", type: "pdf" },
        ]},
        explanations: { files: [
          { name: "طريقة حل مهمة الدعم الفني وإدارة تكنولوجيا المعلومات (أ)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%81%D9%86%D9%8A%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20(%D8%A3).pdf", type: "pdf" },
          { name: "طريقة حل مهمة تطوير ألعاب الحاسوب هدف (أ)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
          { name: "طريقة حل مهمة تطوير ألعاب الحاسوب هدف (ب + ج)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC).pdf", type: "pdf" },
          { name: "جميع المساعدات لمهمة الدعم الفني وإدارة تكنولوجيا المعلومات هدف (ب)", url: "https://drive.google.com/drive/folders/1cCV0YHFjti6LN5VAsokacbSEWVUyrJHc?usp=drive_link", type: "folder" },
          { name: "طريقة حل مهمة الدعم الفني وإدارة تكنولوجيا المعلومات هدف (ج)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%81%D9%86%D9%8A%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%AC).pdf", type: "pdf" },
        ]},
        teacherGuide: { files: [
          { name: "دليل المعلم الدعم الفني وإدارة تكنولوجيا المعلومات هدف (أ)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%81%D9%86%D9%8A%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
          { name: "دليل المعلم تطوير ألعاب الحاسوب هدف (أ)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
        ]},
        assignments: { files: [
          { name: "مهمة تطوير ألعاب الحاسوب هدف هدف (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8%20%D9%87%D8%AF%D9%81%20%D9%87%D8%AF%D9%81%20(%D8%A3).docx", type: "doc" },
          { name: "مهمة الدعم الفني وإدارة تكنولوجيا المعلومات هدف (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%81%D9%86%D9%8A%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A3).docx", type: "doc" },
          { name: "مهمة الدعم الفني وإدارة تكنولوجيا المعلومات هدف (ب)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%81%D9%86%D9%8A%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A8).docx", type: "doc" },
          { name: "مهمة الدعم الفني وإدارة تكنولوجيا المعلومات هدف (ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AF%D8%B9%D9%85%20%D8%A7%D9%84%D9%81%D9%86%D9%8A%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%AC).docx", type: "doc" },
          { name: "مهمة تطوير ألعاب الحاسوب هدف (ب + ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A3%D9%84%D8%B9%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC).docx", type: "doc" },
        ]},
      },
    },
    grade12: {
      semester1: {
        books: { files: [
          { name: "كتاب الأمن السيبراني وإدارة الحوادث", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A3%D9%85%D9%86%20%D8%A7%D9%84%D8%B3%D9%8A%D8%A8%D8%B1%D8%A7%D9%86%D9%8A%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AD%D9%88%D8%A7%D8%AF%D8%AB.pdf", type: "pdf" },
          { name: "كتاب مقدمة إلى الذكاء االصطناعي AI", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1%20%D8%A7%D8%A7%D9%84%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A%20AI.pdf", type: "pdf" },
        ]},
        specs: { files: [
          { name: "جدول المواصفات الأمن السيبراني وإدارة الحوادث", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D9%85%D9%86%20%D8%A7%D9%84%D8%B3%D9%8A%D8%A8%D8%B1%D8%A7%D9%86%D9%8A%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AD%D9%88%D8%A7%D8%AF%D8%AB.pdf", type: "pdf" },
          { name: "جدول المواصفات مقدمة إلى الذكاء االصطناعي AI", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1%20%D8%A7%D8%A7%D9%84%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A%20AI.pdf", type: "pdf" },
        ]},
        explanations: { files: [
          { name: "جميع المساعدات لمهمة الأمن السيبراني وإدارة الحوادث (أ + ب + ج + د)", url: "https://drive.google.com/drive/folders/1veRGidpd_BhVDzL1wEJuB2-vGFKle_Hg?usp=sharing", type: "folder" },
          { name: "جميع المساعدات لمهمة مقدمة إلى الذكاء االصطناعي AI (أ)", url: "https://drive.google.com/drive/folders/1QMejjbUQUMTCTvmke2DS-o0LR8HppbhP?usp=drive_link", type: "folder" },
        ]},
        teacherGuide: { files: [] },
        assignments: { files: [
          { name: "مهمة الأمن السيبراني وإدارة الحوادث (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A3%D9%85%D9%86%20%D8%A7%D9%84%D8%B3%D9%8A%D8%A8%D8%B1%D8%A7%D9%86%D9%8A%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AD%D9%88%D8%A7%D8%AF%D8%AB%20(%D8%A3).pdf", type: "pdf" },
          { name: "مهمة مقدمة إلى الذكاء االصطناعي AI هدف (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1%20%D8%A7%D8%A7%D9%84%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A%20AI%20%D9%87%D8%AF%D9%81%20(%D8%A3).docx", type: "doc" },
        ]},
      },
      semester2: {
        books: { files: [
          { name: "كتاب البرمجة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9.pdf", type: "pdf" },
          { name: "كتاب مقدمة إلى الذكاء االصطناعي AI", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1%20%D8%A7%D8%A7%D9%84%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A%20AI.pdf", type: "pdf" },
          { name: "كتاب كتاب إدارة مشاريع تكنولوجيا المعلومات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA.pdf", type: "pdf" },
        ]},
        specs: { files: [
          { name: "جدول مواصفات البرمجة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9.pdf", type: "pdf" },
          { name: "جدول المواصفات مقدمة إلى الذكاء االصطناعي AI", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1%20%D8%A7%D8%A7%D9%84%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A%20AI.pdf", type: "pdf" },
          { name: "جدول المواصفات إدارة مشاريع تكنولوجيا المعلومات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA.pdf", type: "pdf" },
        ]},
        explanations: { files: [
          { name: "طريقة حل مهمة البرمجة هدف (أ)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
          { name: "طريقة حل مهمة البرمجة هدف (ب+ج)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%20%D9%87%D8%AF%D9%81%20(%D8%A8+%D8%AC).pdf", type: "pdf" },
          { name: "جميع المساعدات لمهمة مقدمة إلى الذكاء االصطناعي AI هدف (ب + ج)", url: "https://drive.google.com/drive/folders/1C6pM_VEYllvg793ADdXb1HuCWg1udYFV", type: "folder" },
          { name: "طريقة حل + شرح مهمة مهمة إدارة مشاريع تكنولوجيا المعلومات (أ)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20(%D8%A3).pdf", type: "pdf" },
          { name: "طريقة حل مهمة إدارة مشاريع تكنولوجيا المعلومات هدف (أ)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A3).pdf", type: "pdf" },
        ]},
        teacherGuide: { files: [] },
        assignments: { files: [
          { name: "مهمة البرمجة هدف (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%20%D9%87%D8%AF%D9%81%20(%D8%A3).docx", type: "doc" },
          { name: "مهمة البرمجة هدف (ب+ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%20%D9%87%D8%AF%D9%81%20(%D8%A8+%D8%AC).docx", type: "doc" },
          { name: "مهمة مقدمة إلى الذكاء االصطناعي AI هدف (ب + ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1%20%D8%A7%D8%A7%D9%84%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A%20AI%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC).docx", type: "doc" },
          { name: "مهمة إدارة مشاريع تكنولوجيا المعلومات هدف (أ)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A3).docx", type: "doc" },
        ]},
      },
      semester3: {
        books: { files: [
          { name: "كتاب كتاب إدارة مشاريع تكنولوجيا المعلومات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA.pdf", type: "pdf" },
        ]},
        specs: { files: [
          { name: "جدول المواصفات إدارة مشاريع تكنولوجيا المعلومات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA.pdf", type: "pdf" },
        ]},
        explanations: { files: [
          { name: "طريقة حل مهمة إدارة مشاريع تكنولوجيا المعلومات هدف (ب + ج + د)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC%20+%20%D8%AF).pdf", type: "pdf" },
        ]},
        teacherGuide: { files: [] },
        assignments: { files: [
          { name: "مهمة إدارة مشاريع تكنولوجيا المعلومات هدف (ب + ج)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%A8%20+%20%D8%AC).docx", type: "doc" },
          { name: "مهمة إدارة مشاريع تكنولوجيا المعلومات هدف (د)", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9%20%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D9%87%D8%AF%D9%81%20(%D8%AF).docx", type: "doc" },
        ]},
      },
    },
  },
  agriculture: JSON.parse(JSON.stringify(emptyDepartment)),
  hospitality: {
    grade10: {
      semester1: {
        specs: {
          files: [
            { name: "جدول المواصفات التعريف بقطاع الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B9%D8%B1%D9%8A%D9%81%20%D8%A8%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات مهارات مكان العمل في مجال الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%85%D9%83%D8%A7%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات مهارات خدمة العملاء في قطاع الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات الاستدامة في قطاع الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات إعداد الطعام وطهيه وتقديمه", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب التعريف بقطاع الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B9%D8%B1%D9%8A%D9%81%20%D8%A8%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب مهارات مكان العمل في مجال الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%85%D9%83%D8%A7%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب مهارات خدمة العملاء في قطاع الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%85%D9%83%D8%A7%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب الاستدامة في قطاع الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%85%D9%83%D8%A7%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب إعداد الطعام وطهيه وتقديمه", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D9%88%D8%B7%D9%87%D9%8A%D9%87%20%D9%88%D8%AA%D9%82%D8%AF%D9%8A%D9%85%D9%87.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "شرح + سلايدات التعريف بقطاع الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B9%D8%B1%D9%8A%D9%81%20%D8%A8%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
            { name: "شرح + سلايدات مهارات مكان العمل في مجال الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%85%D9%83%D8%A7%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
            { name: "شرح + سلايدات مهارات خدمة العملاء في قطاع الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
            { name: "شرح + سلايدات الاستدامة في قطاع الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
            { name: "شرح + سلايدات إعداد الطعام وطهيه وتقديمه", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D9%88%D8%B7%D9%87%D9%8A%D9%87%20%D9%88%D8%AA%D9%82%D8%AF%D9%8A%D9%85%D9%87.pptx", type: "presentation" },
          ],
        },
        teacherGuide: {
          files: [
            { name: "دليل المعلم التعريف بقطاع الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%AA%D8%B9%D8%B1%D9%8A%D9%81%20%D8%A8%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم مهارات مكان العمل في مجال الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%85%D9%83%D8%A7%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم مهارات خدمة العملاء في قطاع الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم الاستدامة في قطاع الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم إعداد الطعام وطهيه وتقديمه", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D9%88%D8%B7%D9%87%D9%8A%D9%87%20%D9%88%D8%AA%D9%82%D8%AF%D9%8A%D9%85%D9%87.docx", type: "doc" },
          ],
        },
        assignments: {
          files: [
            { name: "مهمة التعريف بقطاع الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B9%D8%B1%D9%8A%D9%81%20%D8%A8%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة مهارات مكان العمل في مجال الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%85%D9%83%D8%A7%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة مهارات خدمة العملاء في قطاع الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة الاستدامة في قطاع الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة إعداد الطعام وطهيه وتقديمه", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D9%88%D8%B7%D9%87%D9%8A%D9%87%20%D9%88%D8%AA%D9%82%D8%AF%D9%8A%D9%85%D9%87.docx", type: "doc" },
          ],
        },
      },
      semester2: {
        specs: {
          files: [
            { name: "جدول المواصفات الصحة والسلامة والنظافة في مجال الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B5%D8%AD%D8%A9%20%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9%20%D9%88%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%81%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات أنماط الحياة الصحية، والأطعمة، والخيارات في قوائم الطعام", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A3%D9%86%D9%85%D8%A7%D8%B7%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D9%82%D9%88%D8%A7%D8%A6%D9%85%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85.pdf", type: "pdf" },
            { name: "جدول المواصفات تقديم الأطعمة والمشروبات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A3%D9%86%D9%85%D8%A7%D8%B7%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D9%82%D9%88%D8%A7%D8%A6%D9%85%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85.pdf", type: "pdf" },
            { name: "جدول المواصفات الشراء والرقابة على المخزون", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A3%D9%86%D9%85%D8%A7%D8%B7%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D9%82%D9%88%D8%A7%D8%A6%D9%85%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85.pdf", type: "pdf" },
            { name: "جدول المواصفات المعجنات والحلويات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A3%D9%86%D9%85%D8%A7%D8%B7%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D9%82%D9%88%D8%A7%D8%A6%D9%85%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب الصحة والسلامة والنظافة في مجال الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B5%D8%AD%D8%A9%20%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9%20%D9%88%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%81%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب أنماط الحياة الصحية، والأطعمة، والخيارات في قوائم الطعام", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A3%D9%86%D9%85%D8%A7%D8%B7%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D9%82%D9%88%D8%A7%D8%A6%D9%85%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85.pdf", type: "pdf" },
            { name: "كتاب تقديم الأطعمة والمشروبات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D9%82%D8%AF%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%20%D9%88%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.pdf", type: "pdf" },
            { name: "كتاب تقديم الشراء والرقابة على المخزون", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D9%82%D8%AF%D9%8A%D9%85%20%D8%A7%D9%84%D8%B4%D8%B1%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D8%B1%D9%82%D8%A7%D8%A8%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D8%AE%D8%B2%D9%88%D9%86.pdf", type: "pdf" },
            { name: "كتاب المعجنات والحلويات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D9%85%D8%B9%D8%AC%D9%86%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "شرح + سلايدات الصحة والسلامة والنظافة في مجال الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B5%D8%AD%D8%A9%20%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9%20%D9%88%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%81%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
            { name: "شرح + سلايدات أنماط الحياة الصحية، والأطعمة، والخيارات في قوائم الطعام", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%A3%D9%86%D9%85%D8%A7%D8%B7%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D9%82%D9%88%D8%A7%D8%A6%D9%85%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85.pptx", type: "presentation" },
            { name: "شرح + سلايدات تقديم الأطعمة والمشروبات", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%AA%D9%82%D8%AF%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%20%D9%88%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.pptx", type: "presentation" },
            { name: "شرح + سلايدات تقديم الشراء والرقابة على المخزون", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%AA%D9%82%D8%AF%D9%8A%D9%85%20%D8%A7%D9%84%D8%B4%D8%B1%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D8%B1%D9%82%D8%A7%D8%A8%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D8%AE%D8%B2%D9%88%D9%86.pptx", type: "presentation" },
            { name: "شرح + سلايدات المعجنات والحلويات", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%B9%D8%AC%D9%86%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA.pptx", type: "presentation" },
          ],
        },
        teacherGuide: {
          files: [
            { name: "دليل المعلم الصحة والسلامة والنظافة في مجال الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%B5%D8%AD%D8%A9%20%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9%20%D9%88%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%81%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم أنماط الحياة الصحية، والأطعمة، والخيارات في قوائم الطعام", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A3%D9%86%D9%85%D8%A7%D8%B7%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D9%82%D9%88%D8%A7%D8%A6%D9%85%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85.docx", type: "doc" },
            { name: "دليل المعلم تقديم الأطعمة والمشروبات", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%AA%D9%82%D8%AF%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%20%D9%88%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.docx", type: "doc" },
            { name: "دليل المعلم تقديم الشراء والرقابة على المخزون", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%AA%D9%82%D8%AF%D9%8A%D9%85%20%D8%A7%D9%84%D8%B4%D8%B1%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D8%B1%D9%82%D8%A7%D8%A8%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D8%AE%D8%B2%D9%88%D9%86.docx", type: "doc" },
            { name: "دليل المعلم المعجنات والحلويات", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D9%85%D8%B9%D8%AC%D9%86%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA.docx", type: "doc" },
          ],
        },
        assignments: {
          files: [
            { name: "مهمة الصحة والسلامة والنظافة في مجال الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AD%D8%A9%20%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9%20%D9%88%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D9%81%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة أنماط الحياة الصحية، والأطعمة، والخيارات في قوائم الطعام", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A3%D9%86%D9%85%D8%A7%D8%B7%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%D8%8C%20%D9%88%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%81%D9%8A%20%D9%82%D9%88%D8%A7%D8%A6%D9%85%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85.docx", type: "doc" },
            { name: "مهمة تقديم الأطعمة والمشروبات", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D9%82%D8%AF%D9%8A%D9%85%20%D8%A7%D9%84%D8%A3%D8%B7%D8%B9%D9%85%D8%A9%20%D9%88%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.docx", type: "doc" },
            { name: "مهمة تقديم الشراء والرقابة على المخزون", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D9%82%D8%AF%D9%8A%D9%85%20%D8%A7%D9%84%D8%B4%D8%B1%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D8%B1%D9%82%D8%A7%D8%A8%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D8%AE%D8%B2%D9%88%D9%86.docx", type: "doc" },
            { name: "مهمة المعجنات والحلويات", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D9%85%D8%B9%D8%AC%D9%86%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%8A%D8%A7%D8%AA.docx", type: "doc" },
          ],
        },
      },
      semester3: {
        specs: {
          files: [
            { name: "جدول المواصفات تخطيط وإدارة فعالية الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات الطعام العالمي المعاصر", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B5%D8%B1.pdf", type: "pdf" },
            { name: "جدول المواصفات خدمات الإقامة في مجال الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B5%D8%B1.pdf", type: "pdf" },
            { name: "جدول المواصفات عمليات المكاتب الأمامية لقطاع الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B5%D8%B1.pdf", type: "pdf" },
            { name: "جدول المواصفات مهارات صانع المشروبات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B5%D8%B1.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب تخطيط وإدارة فعالية الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب الطعام العالمي المعاصر", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B5%D8%B1.pdf", type: "pdf" },
            { name: "كتاب خدمات الإقامة في مجال الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%82%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب عمليات المكاتب الأمامية لقطاع الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%A9%20%D9%84%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب مهارات صانع المشروبات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%B5%D8%A7%D9%86%D8%B9%20%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "شرح + سلايدات تخطيط وإدارة فعالية الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
            { name: "شرح + سلايدات الطعام العالمي المعاصر", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B5%D8%B1.pptx", type: "presentation" },
            { name: "شرح + سلايدات خدمات الإقامة في مجال الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%82%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
            { name: "شرح + سلايدات عمليات المكاتب الأمامية لقطاع الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%A9%20%D9%84%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
            { name: "شرح + سلايدات مهارات صانع المشروبات", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%B5%D8%A7%D9%86%D8%B9%20%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.pptx", type: "presentation" },
          ],
        },
        teacherGuide: {
          files: [
            { name: "دليل المعلم تخطيط وإدارة فعالية الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم الطعام العالمي المعاصر", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B5%D8%B1.docx", type: "doc" },
            { name: "دليل المعلم خدمات الإقامة في مجال الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%82%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم عمليات المكاتب الأمامية لقطاع الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%A9%20%D9%84%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم مهارات صانع المشروبات", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%B5%D8%A7%D9%86%D8%B9%20%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.docx", type: "doc" },
          ],
        },
        assignments: {
          files: [
            { name: "مهمة تخطيط وإدارة فعالية الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة الطعام العالمي المعاصر", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%B7%D8%B9%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%B5%D8%B1.docx", type: "doc" },
            { name: "مهمة خدمات الإقامة في مجال الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%82%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة عمليات المكاتب الأمامية لقطاع الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D9%84%D8%A3%D9%85%D8%A7%D9%85%D9%8A%D8%A9%20%D9%84%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة مهارات صانع المشروبات", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%B5%D8%A7%D9%86%D8%B9%20%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.docx", type: "doc" },
          ],
        },
      },
    },
    grade11: {
      semester1: {
        specs: {
          files: [
            { name: "جدول المواصفات مجال الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات توفير خدمة العملاء في مجال الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%AA%D9%88%D9%81%D9%8A%D8%B1%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب مجال الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب توفير خدمة العملاء في مجال الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D9%88%D9%81%D9%8A%D8%B1%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "شرح + سلايدات مجال الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
            { name: "شرح + سلايدات توفير خدمة العملاء في مجال الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%AA%D9%88%D9%81%D9%8A%D8%B1%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
          ],
        },
        teacherGuide: {
          files: [
            { name: "دليل المعلم مجال الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم توفير خدمة العملاء في مجال الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%AA%D9%88%D9%81%D9%8A%D8%B1%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
          ],
        },
        assignments: {
          files: [
            { name: "مهمة مجال الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة توفير خدمة العملاء في مجال الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D9%88%D9%81%D9%8A%D8%B1%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
          ],
        },
      },
      semester2: {
        specs: {
          files: [
            { name: "جدول المواصفات الإشراف على خدمة الأغذية والمشروبات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81%20%D8%B9%D9%84%D9%89%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%A3%D8%BA%D8%B0%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.pdf", type: "pdf" },
            { name: "جدول المواصفات عمليات مكاتب الاستقبال", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%A8%D8%A7%D9%84.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب الإشراف على خدمة الأغذية والمشروبات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81%20%D8%B9%D9%84%D9%89%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%A3%D8%BA%D8%B0%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.pdf", type: "pdf" },
            { name: "كتاب عمليات مكاتب الاستقبال", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%A8%D8%A7%D9%84.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "شرح + سلايدات الإشراف على خدمة الأغذية والمشروبات", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81%20%D8%B9%D9%84%D9%89%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%A3%D8%BA%D8%B0%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.pdf", type: "pdf" },
            { name: "شرح + سلايدات عمليات مكاتب الاستقبال", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%A8%D8%A7%D9%84.pdf", type: "pdf" },
          ],
        },
        teacherGuide: {
          files: [],
        },
        assignments: {
          files: [
            { name: "مهمة الإشراف على خدمة الأغذية والمشروبات", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81%20%D8%B9%D9%84%D9%89%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%A3%D8%BA%D8%B0%D9%8A%D8%A9%20%D9%88%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA.docx", type: "doc" },
            { name: "مهمة عمليات مكاتب الاستقبال", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%A8%D8%A7%D9%84.docx", type: "doc" },
          ],
        },
      },
      semester3: {
        specs: {
          files: [
            { name: "جدول المواصفات البيئة والاستدامة في مجال الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D8%A9%20%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات مطبخ بلدك", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D8%B7%D8%A8%D8%AE%20%D8%A8%D9%84%D8%AF%D9%83.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب البيئة والاستدامة في مجال الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D8%A9%20%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب مطبخ بلدك", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D8%B7%D8%A8%D8%AE%20%D8%A8%D9%84%D8%AF%D9%83.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "شرح + سلايدات البيئة والاستدامة في مجال الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D8%A9%20%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
            { name: "شرح + سلايدات مطبخ بلدك", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D9%85%D8%B7%D8%A8%D8%AE%20%D8%A8%D9%84%D8%AF%D9%83.pptx", type: "presentation" },
          ],
        },
        teacherGuide: {
          files: [
            { name: "دليل المعلم البيئة والاستدامة في مجال الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D8%A9%20%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم مطبخ بلدك", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D8%B7%D8%A8%D8%AE%20%D8%A8%D9%84%D8%AF%D9%83.docx", type: "doc" },
          ],
        },
        assignments: {
          files: [
            { name: "مهمة البيئة والاستدامة في مجال الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D8%A9%20%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة مطبخ بلدك", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D8%B7%D8%A8%D8%AE%20%D8%A8%D9%84%D8%AF%D9%83.docx", type: "doc" },
          ],
        },
      },
    },
    grade12: {
      semester1: {
        specs: {
          files: [
            { name: "جدول المواصفات مبادئ القيادة والإشراف", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9%20%D9%88%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81.pdf", type: "pdf" },
            { name: "جدول المواصفات عمليات الإقامة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%82%D8%A7%D9%85%D8%A9.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب مبادئ القيادة والإشراف", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9%20%D9%88%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81.pdf", type: "pdf" },
            { name: "كتاب عمليات الإقامة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%82%D8%A7%D9%85%D8%A9.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "شرح + سلايدات مبادئ القيادة والإشراف", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9%20%D9%88%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81.pptx", type: "presentation" },
            { name: "شرح + سلايدات عمليات الإقامة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%82%D8%A7%D9%85%D8%A9.pptx", type: "presentation" },
          ],
        },
        teacherGuide: {
          files: [
            { name: "دليل المعلم مبادئ القيادة والإشراف", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9%20%D9%88%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81.docx", type: "doc" },
            { name: "دليل المعلم عمليات الإقامة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%82%D8%A7%D9%85%D8%A9.docx", type: "doc" },
          ],
        },
        assignments: {
          files: [
            { name: "مهمة مبادئ القيادة والإشراف", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D9%82%D9%8A%D8%A7%D8%AF%D8%A9%20%D9%88%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81.docx", type: "doc" },
            { name: "مهمة عمليات الإقامة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D9%82%D8%A7%D9%85%D8%A9.docx", type: "doc" },
          ],
        },
      },
      semester2: {
        specs: {
          files: [
            { name: "جدول المواصفات الإشراف على سلامة الغذاء في مجال الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81%20%D8%B9%D9%84%D9%89%20%D8%B3%D9%84%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات التكنولوجيا والوسائط الرقمية في مجال الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D9%88%D8%A7%D9%84%D9%88%D8%B3%D8%A7%D8%A6%D8%B7%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب الإشراف على سلامة الغذاء في مجال الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81%20%D8%B9%D9%84%D9%89%20%D8%B3%D9%84%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب التكنولوجيا والوسائط الرقمية في مجال الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D9%88%D8%A7%D9%84%D9%88%D8%B3%D8%A7%D8%A6%D8%B7%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [],
        },
        teacherGuide: {
          files: [
            { name: "دليل المعلم الإشراف على سلامة الغذاء في مجال الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81%20%D8%B9%D9%84%D9%89%20%D8%B3%D9%84%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم التكنولوجيا والوسائط الرقمية في مجال الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D9%88%D8%A7%D9%84%D9%88%D8%B3%D8%A7%D8%A6%D8%B7%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
          ],
        },
        assignments: {
          files: [
            { name: "مهمة الإشراف على سلامة الغذاء في مجال الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A5%D8%B4%D8%B1%D8%A7%D9%81%20%D8%B9%D9%84%D9%89%20%D8%B3%D9%84%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A1%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة التكنولوجيا والوسائط الرقمية في مجال الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D9%88%D8%A7%D9%84%D9%88%D8%B3%D8%A7%D8%A6%D8%B7%20%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
          ],
        },
      },
      semester3: {
        specs: {
          files: [
            { name: "جدول المواصفات مراقبة التكاليف لمشرفي الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D8%B1%D8%A7%D9%82%D8%A8%D8%A9%20%D8%A7%D9%84%D8%AA%D9%83%D8%A7%D9%84%D9%8A%D9%81%20%D9%84%D9%85%D8%B4%D8%B1%D9%81%D9%8A%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات البيع الشخصي والمهارات الترويجية في قطاع الضيافة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%20%D9%88%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B1%D9%88%D9%8A%D8%AC%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب مراقبة التكاليف لمشرفي الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D8%B1%D8%A7%D9%82%D8%A8%D8%A9%20%D8%A7%D9%84%D8%AA%D9%83%D8%A7%D9%84%D9%8A%D9%81%20%D9%84%D9%85%D8%B4%D8%B1%D9%81%D9%8A%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
            { name: "كتاب البيع الشخصي والمهارات الترويجية في قطاع الضيافة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%20%D9%88%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B1%D9%88%D9%8A%D8%AC%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "شرح + سلايدات مراقبة التكاليف لمشرفي الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D9%85%D8%B1%D8%A7%D9%82%D8%A8%D8%A9%20%D8%A7%D9%84%D8%AA%D9%83%D8%A7%D9%84%D9%8A%D9%81%20%D9%84%D9%85%D8%B4%D8%B1%D9%81%D9%8A%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
            { name: "شرح + سلايدات البيع الشخصي والمهارات الترويجية في قطاع الضيافة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%20%D9%88%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B1%D9%88%D9%8A%D8%AC%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.pptx", type: "presentation" },
          ],
        },
        teacherGuide: {
          files: [
            { name: "دليل المعلم مراقبة التكاليف لمشرفي الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D9%85%D8%B1%D8%A7%D9%82%D8%A8%D8%A9%20%D8%A7%D9%84%D8%AA%D9%83%D8%A7%D9%84%D9%8A%D9%81%20%D9%84%D9%85%D8%B4%D8%B1%D9%81%D9%8A%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "دليل المعلم البيع الشخصي والمهارات الترويجية في قطاع الضيافة", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%20%D9%88%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B1%D9%88%D9%8A%D8%AC%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
          ],
        },
        assignments: {
          files: [
            { name: "مهمة مراقبة التكاليف لمشرفي الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D8%B1%D8%A7%D9%82%D8%A8%D8%A9%20%D8%A7%D9%84%D8%AA%D9%83%D8%A7%D9%84%D9%8A%D9%81%20%D9%84%D9%85%D8%B4%D8%B1%D9%81%D9%8A%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
            { name: "مهمة البيع الشخصي والمهارات الترويجية في قطاع الضيافة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%20%D9%88%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B1%D9%88%D9%8A%D8%AC%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B6%D9%8A%D8%A7%D9%81%D8%A9.docx", type: "doc" },
          ],
        },
      },
    },
  },
  business: {
    grade10: {
      semester1: {
        specs: {
          files: [
            { name: "جدول المواصفات استخدام شركات عبر الإنترنت", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85%20%D8%B4%D8%B1%D9%83%D8%A7%D8%AA%20%D8%B9%D8%A8%D8%B1%20%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%B1%D9%86%D8%AA.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب الغرض من الشركة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%BA%D8%B1%D8%B6%20%D9%85%D9%86%20%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A9.pdf", type: "pdf" },
            { name: "كتاب مؤسسات بالأعمال", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%20%D8%A8%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84.pdf", type: "pdf" },
            { name: "كتاب التنبؤ بالأداء المالي للشركة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AA%D9%86%D8%A8%D8%A4%20%D8%A8%D8%A7%D9%84%D8%A3%D8%AF%D8%A7%D8%A1%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%20%D9%84%D9%84%D8%B4%D8%B1%D9%83%D8%A9.pdf", type: "pdf" },
            { name: "كتاب خطة تسويق", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AE%D8%B7%D8%A9%20%D8%AA%D8%B3%D9%88%D9%8A%D9%82.pdf", type: "pdf" },
          ],
        },
        explanations: { files: [] },
        teacherGuide: { files: [] },
        assignments: { files: [] },
      },
      semester2: {
        specs: { files: [] },
        books: {
          files: [
            { name: "كتاب إنشاء شركة صغيرة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A5%D9%86%D8%B4%D8%A7%D8%A1%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%B5%D8%BA%D9%8A%D8%B1%D8%A9.pdf", type: "pdf" },
            { name: "كتاب العمل ضمن فريق", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D8%B6%D9%85%D9%86%20%D9%81%D8%B1%D9%8A%D9%82.pdf", type: "pdf" },
            { name: "كتاب إدارة الشؤون المالية الشخصية", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A4%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9.pdf", type: "pdf" },
            { name: "كتاب تقنيات العرض والترويج البصري لشركات البيع بالتجزئة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%B1%D8%B6%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D9%88%D9%8A%D8%AC%20%D8%A7%D9%84%D8%A8%D8%B5%D8%B1%D9%8A%20%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B9%20%D8%A8%D8%A7%D9%84%D8%AA%D8%AC%D8%B2%D8%A6%D8%A9.pdf", type: "pdf" },
          ],
        },
        explanations: { files: [] },
        teacherGuide: { files: [] },
        assignments: {
          files: [
            { name: "مهمة إدارة الشؤون المالية الشخصية", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A4%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9.pdf", type: "pdf" },
            { name: "مهمة الأشخاص بالمنظمات عاشر فصل ثالث", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B4%D8%AE%D8%A7%D8%B5%20%D8%A8%D8%A7%D9%84%D9%85%D9%86%D8%B8%D9%85%D8%A7%D8%AA%20%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%81%D8%B5%D9%84%20%D8%AB%D8%A7%D9%84%D8%AB.docx", type: "doc" },
          ],
        },
      },
      semester3: {
        specs: { files: [] },
        books: {
          files: [
            { name: "كتاب الموظفون في الشركات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D9%85%D9%88%D8%B8%D9%81%D9%88%D9%86%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA.pdf", type: "pdf" },
            { name: "كتاب الشركات عبر الإنترنت", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA%20%D8%B9%D8%A8%D8%B1%20%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%B1%D9%86%D8%AA.pdf", type: "pdf" },
            { name: "كتاب أخلاقيات العمل", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A3%D8%AE%D9%84%D8%A7%D9%82%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%85%D9%84.pdf", type: "pdf" },
            { name: "كتاب إدارة شركة صغيرة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%B5%D8%BA%D9%8A%D8%B1%D8%A9.pdf", type: "pdf" },
          ],
        },
        explanations: { files: [] },
        teacherGuide: {
          files: [
            { name: "دليل المعلم استخدام شركات عبر الإنترنت", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85%20%D8%B4%D8%B1%D9%83%D8%A7%D8%AA%20%D8%B9%D8%A8%D8%B1%20%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%B1%D9%86%D8%AA.pdf", type: "pdf" },
            { name: "دليل المعلم الأشخاص بالمنظمات", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%A3%D8%B4%D8%AE%D8%A7%D8%B5%20%D8%A8%D8%A7%D9%84%D9%85%D9%86%D8%B8%D9%85%D8%A7%D8%AA.pdf", type: "pdf" },
          ],
        },
        assignments: {
          files: [
            { name: "مهمة الشركات عبر الإنترنت", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA%20%D8%B9%D8%A8%D8%B1%20%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%B1%D9%86%D8%AA.docx", type: "doc" },
          ],
        },
      },
    },
    grade11: {
      semester1: {
        specs: {
          files: [
            { name: "جدول المواصفات استكشاف الأعمال", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D8%B3%D8%AA%D9%83%D8%B4%D8%A7%D9%81%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84.pdf", type: "pdf" },
            { name: "جدول المواصفات البحث والتخطيط لحملة تسويقية", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%AD%D8%AB%20%D9%88%D8%A7%D9%84%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7%20%D9%84%D8%AD%D9%85%D9%84%D8%A9%20%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب استكشاف الأعمال", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%83%D8%B4%D8%A7%D9%81%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84.pdf", type: "pdf" },
            { name: "كتاب البحث والتخطيط لحملة تسويقية", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A8%D8%AD%D8%AB%20%D9%88%D8%A7%D9%84%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7%20%D9%84%D8%AD%D9%85%D9%84%D8%A9%20%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "الدليل الإرشادي للمعلم استكشاف الأعمال (PART 2)", url: "/resources/IT_and_General/%D8%A7%D9%84%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D8%A5%D8%B1%D8%B4%D8%A7%D8%AF%D9%8A%20%D9%84%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D8%B3%D8%AA%D9%83%D8%B4%D8%A7%D9%81%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20(PART%202).pdf", type: "pdf" },
          ],
        },
        teacherGuide: {
          files: [
            { name: "دليل المعلم استكشاف الأعمال", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D8%B3%D8%AA%D9%83%D8%B4%D8%A7%D9%81%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84.pdf", type: "pdf" },
          ],
        },
        assignments: { files: [] },
      },
      semester2: {
        specs: {
          files: [
            { name: "جدول المواصفات تمويل الأعمال", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%AD%D8%AB%20%D9%88%D8%A7%D9%84%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7%20%D9%84%D8%AD%D9%85%D9%84%D8%A9%20%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات خدمة العملاء", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب تمويل الأعمال", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D9%85%D9%88%D9%8A%D9%84%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "دليل الإرشادي تمويل الأعمال (PART 2)", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D8%A5%D8%B1%D8%B4%D8%A7%D8%AF%D9%8A%20%D8%AA%D9%85%D9%88%D9%8A%D9%84%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20(PART%202).pdf", type: "pdf" },
            { name: "دراسة الحالة (1) 2026", url: "/resources/IT_and_General/%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D9%84%D8%A9%20(1)%202026.pdf", type: "pdf" },
            { name: "دراسة الحالة (2) 2026", url: "/resources/IT_and_General/%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D9%84%D8%A9%20(2)%202026.pdf", type: "pdf" },
          ],
        },
        teacherGuide: { files: [] },
        assignments: { files: [] },
      },
      semester3: {
        specs: {
          files: [
            { name: "جدول المواصفات أخلاقيات العمل", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A3%D8%AE%D9%84%D8%A7%D9%82%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%85%D9%84.pdf", type: "pdf" },
            { name: "جدول المواصفات إدارة إحدى الفعاليات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%AD%D8%AB%20%D9%88%D8%A7%D9%84%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7%20%D9%84%D8%AD%D9%85%D9%84%D8%A9%20%D8%AA%D8%B3%D9%88%D9%8A%D9%82%D9%8A%D8%A9.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب إدارة إحدى الفعاليات", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A5%D8%AD%D8%AF%D9%89%20%D8%A7%D9%84%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A7%D8%AA.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "دليل الإرشادي إدارة إحدى الفعاليات", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D8%A5%D8%B1%D8%B4%D8%A7%D8%AF%D9%8A%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A5%D8%AD%D8%AF%D9%89%20%D8%A7%D9%84%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A7%D8%AA.pdf", type: "pdf" },
          ],
        },
        teacherGuide: { files: [] },
        assignments: { files: [] },
      },
    },
    grade12: {
      semester1: {
        specs: {
          files: [
            { name: "جدول المواصفات مبادئ الإدارة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب مبادئ الإدارة", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9.pdf", type: "pdf" },
          ],
        },
        explanations: { files: [] },
        teacherGuide: { files: [] },
        assignments: { files: [] },
      },
      semester2: {
        specs: {
          files: [
            { name: "جدول المواصفات اتخاذ قرارات الأعمال", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات الموارد البشرية", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب اتخاذ قرارات الأعمال", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D8%AA%D8%AE%D8%A7%D8%B0%20%D9%82%D8%B1%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84.pdf", type: "pdf" },
            { name: "كتاب الموارد البشرية", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B1%D8%AF%20%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9.pdf", type: "pdf" },
          ],
        },
        explanations: {
          files: [
            { name: "دراسة خدمة عملاء (نموذج مناقشة الطالب للتحقق من عدم وجود سرقة أدبية أو غش)", url: "/resources/IT_and_General/%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20(%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8%20%D9%84%D9%84%D8%AA%D8%AD%D9%82%D9%82%20%D9%85%D9%86%20%D8%B9%D8%AF%D9%85%20%D9%88%D8%AC%D9%88%D8%AF%20%D8%B3%D8%B1%D9%82%D8%A9%20%D8%A3%D8%AF%D8%A8%D9%8A%D8%A9%20%D8%A3%D9%88%20%D8%BA%D8%B4).docx", type: "doc" },
            { name: "دليل الإرشادي دراسة خدمة عملاء", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D8%A5%D8%B1%D8%B4%D8%A7%D8%AF%D9%8A%20%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%B9%D9%85%D9%84%D8%A7%D8%A1.pdf", type: "doc" },
            { name: "دليل الإرشادي دراسة خدمة عملاء", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D8%A5%D8%B1%D8%B4%D8%A7%D8%AF%D9%8A%20%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%B9%D9%85%D9%84%D8%A7%D8%A1.pdf", type: "pdf" },
            { name: "دراسة خدمة عملاء (نموذج استلام وتسليم الواجب)", url: "/resources/IT_and_General/%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20(%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%A7%D8%B3%D8%AA%D9%84%D8%A7%D9%85%20%D9%88%D8%AA%D8%B3%D9%84%D9%8A%D9%85%20%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D8%A8).docx", type: "doc" },
          ],
        },
        teacherGuide: { files: [] },
        assignments: { files: [] },
      },
      semester3: {
        specs: {
          files: [
            { name: "جدول المواصفات دراسة خدمة العملاء", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9.pdf", type: "pdf" },
            { name: "جدول المواصفات أخلاقيات الأعمال", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D9%85%D8%A8%D8%A7%D8%AF%D8%A6%20%D8%A7%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9.pdf", type: "pdf" },
          ],
        },
        books: {
          files: [
            { name: "كتاب دراسة خدمة العملاء", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1.pdf", type: "pdf" },
            { name: "كتاب أخلاقيات الأعمال", url: "/resources/IT_and_General/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A3%D8%AE%D9%84%D8%A7%D9%82%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84.pdf", type: "pdf" },
          ],
        },
        explanations: { files: [] },
        teacherGuide: { files: [] },
        assignments: { files: [] },
      },
    },
  },
  art: {
    grade10: {
      semester1: {
        specs: {
          files: [
            { name: "جدول المواصفات تطوير الفن والتصميم استجابة لموضوع ما", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%81%D9%86%20%D9%88%D8%A7%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D8%B3%D8%AA%D8%AC%D8%A7%D8%A8%D8%A9%20%D9%84%D9%85%D9%88%D8%B6%D9%88%D8%B9%20%D9%85%D8%A7.pdf", type: "pdf" },
            { name: "جدول المواصفات الاتصال المرئي", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
            { name: "جدول المواصفات العمل مع موجز المنسوجات", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
            { name: "جدول المواصفات العمل مع موجز التصوير الفوتوغرافي", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
          ],
        },
        books: { files: [] },
        explanations: {
          files: [
            { name: "طريقة حل وتحليل واجب التصوير الفوتوغرافي", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%88%D8%AA%D8%AD%D9%84%D9%8A%D9%84%20%D9%88%D8%A7%D8%AC%D8%A8%20%D8%A7%D9%84%D8%AA%D8%B5%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%81%D9%88%D8%AA%D9%88%D8%BA%D8%B1%D8%A7%D9%81%D9%8A.pdf", type: "pdf" },
            { name: "طريقة حل + شرح مهمة تصميم الجرافيكي (A)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D9%81%D9%8A%D9%83%D9%8A%20(A).pdf", type: "pdf" },
            { name: "طريقة حل + شرح مهمة تصميم الجرافيكي (B)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D9%81%D9%8A%D9%83%D9%8A%20(B).pdf", type: "pdf" },
            { name: "طريقة حل + شرح مهمة تصميم الجرافيكي (C)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D9%81%D9%8A%D9%83%D9%8A%20(C).pdf", type: "pdf" },
            { name: "شرح + طريقة حل مهمة التواصل البصري", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20+%20%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D8%A7%D9%84%D8%A8%D8%B5%D8%B1%D9%8A.docx", type: "doc" },
          ],
        },
        teacherGuide: { files: [] },
        assignments: {
          files: [
            { name: "مهمة التعامل مع موجز التصوير الفوتوغرافي", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84%20%D9%85%D8%B9%20%D9%85%D9%88%D8%AC%D8%B2%20%D8%A7%D9%84%D8%AA%D8%B5%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%81%D9%88%D8%AA%D9%88%D8%BA%D8%B1%D8%A7%D9%81%D9%8A.docx", type: "doc" },
          ],
        },
      },
      semester2: {
        specs: {
          files: [
            { name: "جدول المواصفات بناء محفظة الفن والتصميم", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
            { name: "جدول المواصفات مشروع بحث عملي", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
            { name: "جدول المواصفات العمل مع موجز متخصص نظرة عامة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
            { name: "جدول المواصفات العمل مع موجز تصميم الأزياء", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
          ],
        },
        books: { files: [] },
        explanations: {
          files: [
            { name: "سلايدات + شرح مهمة المنسوجات", url: "/resources/IT_and_General/%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D9%85%D9%86%D8%B3%D9%88%D8%AC%D8%A7%D8%AA.pptx", type: "presentation" },
            { name: "قالب طريقة حل + شرح مهمة المنسوجات", url: "/resources/IT_and_General/%D9%82%D8%A7%D9%84%D8%A8%20%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D9%85%D9%86%D8%B3%D9%88%D8%AC%D8%A7%D8%AA.docx", type: "doc" },
          ],
        },
        teacherGuide: { files: [] },
        assignments: {
          files: [
            { name: "مهمة مشروع بحث عملي", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%A8%D8%AD%D8%AB%20%D8%B9%D9%85%D9%84%D9%8A.docx", type: "doc" },
          ],
        },
      },
      semester3: {
        specs: {
          files: [
            { name: "جدول المواصفات مراجع سياقية في الفن والتصميم", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
            { name: "جدول المواصفات العمل مع موجز التصميم الجرافيكي", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
            { name: "جدول المواصفات العمل مع ملخص التصميم ثلاثي الأبعاد", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
            { name: "جدول المواصفات العمل مع موجز الفنون البصرية", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
            { name: "جدول المواصفات العمل مع ملخص الفن الرقمي والتصميم", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
            { name: "جدول المواصفات العمل مع ملخص لحرف التصميم", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
            { name: "جدول المواصفات العمل مع موجز الصور المتحركة", url: "/resources/IT_and_General/%D8%AC%D8%AF%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%81%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A7%D9%84%D9%85%D8%B1%D8%A6%D9%8A.pdf", type: "pdf" },
          ],
        },
        books: { files: [] },
        explanations: {
          files: [
            { name: "سلايدات + شرح مهمة تصميم الجرافيكي", url: "/resources/IT_and_General/%D8%B3%D9%84%D8%A7%D9%8A%D8%AF%D8%A7%D8%AA%20+%20%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D9%81%D9%8A%D9%83%D9%8A.pptx", type: "presentation" },
          ],
        },
        teacherGuide: {
          files: [
            { name: "دليل المعلم التصميم الجرافيكي", url: "/resources/IT_and_General/%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%20%D8%A7%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D9%81%D9%8A%D9%83%D9%8A.pdf", type: "pdf" },
          ],
        },
        assignments: {
          files: [
            { name: "مهمة التعامل مع موجز التصميم الجرافيكي", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84%20%D9%85%D8%B9%20%D9%85%D9%88%D8%AC%D8%B2%20%D8%A7%D9%84%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D9%81%D9%8A%D9%83%D9%8A.docx", type: "doc" },
          ],
        },
      },
    },
    grade11: {
      semester1: {
        specs: { files: [] },
        books: { files: [] },
        explanations: {
          files: [
            { name: "طريقة حل مهمة التصوير الفوتوغرافي (المستوى الثالث)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B5%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%81%D9%88%D8%AA%D9%88%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%20(%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%88%D9%89%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB).pdf", type: "pdf" },
          ],
        },
        teacherGuide: { files: [] },
        assignments: {
          files: [
            { name: "مهمة مشروع الطاقة", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9.docx", type: "doc" },
          ],
        },
      },
      semester2: {
        specs: { files: [] },
        books: { files: [] },
        explanations: {
          files: [
            { name: "طريقة حل مهمة التصوير الفوتوغرافي (المستوى الثالث)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B5%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%81%D9%88%D8%AA%D9%88%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%20(%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%88%D9%89%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB).pdf", type: "pdf" },
            { name: "طريقة حل + تحليل معايير مهمة الأزياء (المستوى الثالث)", url: "/resources/IT_and_General/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9%20%D8%AD%D9%84%20+%20%D8%AA%D8%AD%D9%84%D9%8A%D9%84%20%D9%85%D8%B9%D8%A7%D9%8A%D9%8A%D8%B1%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B2%D9%8A%D8%A7%D8%A1%20(%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%88%D9%89%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB).pdf", type: "pdf" },
            { name: "شرح مهمة الرحلات", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%B1%D8%AD%D9%84%D8%A7%D8%AA.docx", type: "doc" },
          ],
        },
        teacherGuide: { files: [] },
        assignments: {
          files: [
            { name: "مهمة الرحلات", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%B1%D8%AD%D9%84%D8%A7%D8%AA.docx", type: "doc" },
            { name: "مهمة الرحلات", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%B1%D8%AD%D9%84%D8%A7%D8%AA.docx", type: "doc" },
          ],
        },
      },
      semester3: {
        specs: { files: [] },
        books: { files: [] },
        explanations: {
          files: [
            { name: "شرح مهمة الطاقة", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9.pdf", type: "pdf" },
            { name: "شرح مهمة مشروع الضمير", url: "/resources/IT_and_General/%D8%B4%D8%B1%D8%AD%20%D9%85%D9%87%D9%85%D8%A9%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%A7%D9%84%D8%B6%D9%85%D9%8A%D8%B1.docx", type: "doc" },
          ],
        },
        teacherGuide: { files: [] },
        assignments: {
          files: [
            { name: "مهمة الضمير", url: "/resources/IT_and_General/%D9%85%D9%87%D9%85%D8%A9%20%D8%A7%D9%84%D8%B6%D9%85%D9%8A%D8%B1.pdf", type: "pdf" },
          ],
        },
      },
    },
    grade12: JSON.parse(JSON.stringify(emptyGrade)),
  },
  construction: JSON.parse(JSON.stringify(emptyDepartment)),
  beauty: BEAUTY_RESOURCES,
  sports: SPORTS_RESOURCES,
  healthcare: HEALTHCARE_RESOURCES,
  engineering: ENGINEERING_RESOURCES,
};

export const gradeLabels: Record<string, string> = {
  grade10: "الصف العاشر",
  grade11: "الصف الأول ثانوي",
  grade12: "الصف الثاني ثانوي",
};

export const semesterLabels: Record<string, string> = {
  semester1: "الفصل الأول",
  semester2: "الفصل الثاني",
  semester3: "الفصل الثالث",
};

export const categoryLabels: Record<string, string> = {
  books: "الكتب",
  specs: "جدول المواصفات",
  explanations: "الشروحات",
  teacherGuide: "دليل المعلم",
  assignments: "المهمات",
};

export const categoryIcons: Record<string, string> = {
  books: "📚",
  specs: "📋",
  explanations: "📝",
  teacherGuide: "👨‍🏫",
  assignments: "📄",
};
