import type { DepartmentResources, GradeData, SemesterData, ResourceFile } from "./assistanceResources";

const emptySemester = (): SemesterData => ({
  specs: { files: [] },
  books: { files: [] },
  explanations: { files: [] },
  teacherGuide: { files: [] },
  assignments: { files: [] },
});

// الصف العاشر — الكتب موزعة على 3 فصول
const grade10_s1_books: ResourceFile[] = [
  {
    name: "كتاب استكشاف مجال العناية بالشعر", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%83%D8%B4%D8%A7%D9%81%20%D9%85%D8%AC%D8%A7%D9%84%20%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9%20%D8%A8%D8%A7%D9%84%D8%B4%D8%B9%D8%B1.pdf",
    type: "pdf",
  },
  {
    name: "كتاب الجلد والشعر والأظافر", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AC%D9%84%D8%AF%20%D9%88%D8%A7%D9%84%D8%B4%D8%B9%D8%B1%20%D9%88%D8%A7%D9%84%D8%A3%D8%B8%D8%A7%D9%81%D8%B1.pdf",
    type: "pdf",
  },
];

const grade10_s2_books: ResourceFile[] = [
  {
    name: "كتاب مهام الاستقبال في الصالون", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%85%D9%87%D8%A7%D9%85%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%A8%D8%A7%D9%84%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B5%D8%A7%D9%84%D9%88%D9%86.pdf",
    type: "pdf",
  },
  {
    name: "كتاب ترويج وبيع المنتجات والخدمات للعملاء في الصالون", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D8%B1%D9%88%D9%8A%D8%AC%20%D9%88%D8%A8%D9%8A%D8%B9%20%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D9%84%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B5%D8%A7%D9%84%D9%88%D9%86.pdf",
    type: "pdf",
  },
  {
    name: "كتاب شامبو وبلسم الشعر", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B4%D8%A7%D9%85%D8%A8%D9%88%20%D9%88%D8%A8%D9%84%D8%B3%D9%85%20%D8%A7%D9%84%D8%B4%D8%B9%D8%B1.pdf",
    type: "pdf",
  },
  {
    name: "كتاب فن تصفيف الشعر", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%81%D9%86%20%D8%AA%D8%B5%D9%81%D9%8A%D9%81%20%D8%A7%D9%84%D8%B4%D8%B9%D8%B1.pdf",
    type: "pdf",
  },
  {
    name: "كتاب فن تزيين الأظافر", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%81%D9%86%20%D8%AA%D8%B2%D9%8A%D9%8A%D9%86%20%D8%A7%D9%84%D8%A3%D8%B8%D8%A7%D9%81%D8%B1.pdf",
    type: "pdf",
  },
];

const grade10_s3_books: ResourceFile[] = [
  {
    name: "كتاب تقديم خدمات العناية ببشرة الوجه",
    url: "https://drive.google.com/drive/folders/1cCV0YHFjti6LN5VAsokacbSEWVUyrJHc?usp=drive_link",
    type: "folder",
  },
  {
    name: "كتاب تطبيق مستحضرات التجميل", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%20%D9%85%D8%B3%D8%AA%D8%AD%D8%B6%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D9%84.pdf",
    type: "pdf",
  },
  {
    name: "كتاب تطبيق تقنيات المانيكير والباديكير", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%20%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D9%85%D8%A7%D9%86%D9%8A%D9%83%D9%8A%D8%B1%20%D9%88%D8%A7%D9%84%D8%A8%D8%A7%D8%AF%D9%8A%D9%83%D9%8A%D8%B1.pdf",
    type: "pdf",
  },
  {
    name: "كتاب المؤسسة التجارية", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%8A%D8%A9.pdf",
    type: "pdf",
  },
  {
    name: "كتاب تقنيات إزالة الشعر", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA%20%D8%A5%D8%B2%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B9%D8%B1.pdf",
    type: "pdf",
  },
];

// الصف الأول ثانوي
const grade11_s1_books: ResourceFile[] = [
  {
    name: "كتاب تدريب صالون التجميل المهني", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%20%D8%B5%D8%A7%D9%84%D9%88%D9%86%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D9%84%20%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A.pdf",
    type: "pdf",
  },
];
const grade11_s2_books: ResourceFile[] = [
  {
    name: "كتاب الصحة والتعافي", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%B5%D8%AD%D8%A9%20%D9%88%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%81%D9%8A.pdf",
    type: "pdf",
  },
  {
    name: "كتاب الأساليب المتقدمة للعناية بالأظافر وتجميلها", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D9%84%D9%8A%D8%A8%20%D8%A7%D9%84%D9%85%D8%AA%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9%20%D8%A8%D8%A7%D9%84%D8%A3%D8%B8%D8%A7%D9%81%D8%B1%20%D9%88%D8%AA%D8%AC%D9%85%D9%8A%D9%84%D9%87%D8%A7.pdf",
    type: "pdf",
  },
];
const grade11_s3_books: ResourceFile[] = [
  {
    name: "كتاب علاجات البشرة المتقدمة", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%B9%D9%84%D8%A7%D8%AC%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%82%D8%AF%D9%85%D8%A9.pdf",
    type: "pdf",
  },
  {
    name: "كتاب المكياج الإبداعي وفن الحناء", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D9%85%D9%83%D9%8A%D8%A7%D8%AC%20%D8%A7%D9%84%D8%A5%D8%A8%D8%AF%D8%A7%D8%B9%D9%8A%20%D9%88%D9%81%D9%86%20%D8%A7%D9%84%D8%AD%D9%86%D8%A7%D8%A1.pdf",
    type: "pdf",
  },
  {
    name: "كتاب تلوين وتفتيح الشعر وتقنية الهايلايت", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%AA%D9%84%D9%88%D9%8A%D9%86%20%D9%88%D8%AA%D9%81%D8%AA%D9%8A%D8%AD%20%D8%A7%D9%84%D8%B4%D8%B9%D8%B1%20%D9%88%D8%AA%D9%82%D9%86%D9%8A%D8%A9%20%D8%A7%D9%84%D9%87%D8%A7%D9%8A%D9%84%D8%A7%D9%8A%D8%AA.pdf",
    type: "pdf",
  },
  {
    name: "كتاب نظرة عامة على البيع والترويج", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%86%D8%B8%D8%B1%D8%A9%20%D8%B9%D8%A7%D9%85%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B9%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D9%88%D9%8A%D8%AC.pdf",
    type: "pdf",
  },
];

// الصف الثاني ثانوي
const grade12_s1_books: ResourceFile[] = [
  {
    name: "كتاب قص الشعر والتصفيف", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D9%82%D8%B5%20%D8%A7%D9%84%D8%B4%D8%B9%D8%B1%20%D9%88%D8%A7%D9%84%D8%AA%D8%B5%D9%81%D9%8A%D9%81.pdf",
    type: "pdf",
  },
];
const grade12_s2_books: ResourceFile[] = [
  {
    name: "كتاب التدليك والعلاج بالروائح العطرية", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A7%D9%84%D8%AA%D8%AF%D9%84%D9%8A%D9%83%20%D9%88%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC%20%D8%A8%D8%A7%D9%84%D8%B1%D9%88%D8%A7%D8%A6%D8%AD%20%D8%A7%D9%84%D8%B9%D8%B7%D8%B1%D9%8A%D8%A9.pdf",
    type: "pdf",
  },
];
const grade12_s3_books: ResourceFile[] = [
  {
    name: "كتاب بدء مشروع وإدارته", url: "/MKQ-btec/resources/Beauty/%D9%83%D8%AA%D8%A7%D8%A8%20%D8%A8%D8%AF%D8%A1%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D9%88%D8%A5%D8%AF%D8%A7%D8%B1%D8%AA%D9%87.pdf",
    type: "pdf",
  },
];

const buildSem = (books: ResourceFile[]): SemesterData => ({
  ...emptySemester(),
  books: { files: books },
});

export const BEAUTY_RESOURCES: DepartmentResources = {
  grade10: {
    semester1: buildSem(grade10_s1_books),
    semester2: buildSem(grade10_s2_books),
    semester3: buildSem(grade10_s3_books),
  },
  grade11: {
    semester1: buildSem(grade11_s1_books),
    semester2: buildSem(grade11_s2_books),
    semester3: buildSem(grade11_s3_books),
  },
  grade12: {
    semester1: buildSem(grade12_s1_books),
    semester2: buildSem(grade12_s2_books),
    semester3: buildSem(grade12_s3_books),
  },
};
