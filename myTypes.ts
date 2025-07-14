
export interface SharedAboutContent {
  id?: number;
  heading: string;
  main_title: string;
  secondary_title: string;
  description: string;
  pillars?: SharedPillar[] | null;
};

export interface SharedAdditionalAboutSection {
  id?: number;
  title_main: string;
  description_main: string;
  title_secondary?: string;
  description_secondary?: string;
};

export interface SharedAgeModal {
  id?: number;
  heading: string;
  main_text: string;
  cancel_button: string;
  confirm_button: string;
};

export interface SharedBrandsSection {
  id?: number;
  title: string;
  brands?: Brand[] | null;
  subtitle?: string;
};

export interface SharedCatalogue {
  id?: number;
  title: string;
  brands?: Brand[] | null;
  formats?: Format[] | null;
};

export interface SharedContactList {
  id?: number;
  title?: string;
  contacts?: Contact[] | null;
};

export interface SharedContact {
  id?: number;
  name?: string;
  link?: string;
  icon?: Media | null;
  type?: "whatsapp" | "telegram" | "email" | "phone" | "viber";
};

export interface SharedContactsSection {
  id?: number;
  heading: string;
  form_inputs: SharedInput[] | null;
  send_button: string;
};

export interface SharedDescriptionField {
  id?: number;
  icon: Media | null;
  title: string;
  property: "blend" | "cigarette_length" | "nicotine" | "tar" | "filter_type" | "diameter" | "filter_length" | "tobacco_length";
};

export interface SharedDocumentItem {
  id?: number;
  name?: string;
  icon?: Media | null;
  upload?: Media | null;
};

export interface SharedDocumentsList {
  id?: number;
  title?: string;
  upload_items?: UploadItem[] | null;
};

export interface SharedFooter {
  id?: number;
  legal_info?: SharedLegalInfo | null;
  contact_list?: SharedContactList | null;
  document_list?: SharedDocumentsList | null;
  copyrights?: string;
};

export interface SharedHeader {
  id?: number;
  logo?: Media | null;
  navbar?: SharedNavbar | null;
  contacts?: Contact[] | null;
};

export interface SharedInput {
  id?: number;
  placeholder: string;
  field_name: string;
  type: "field" | "textarea";
};

export interface SharedLegalInfo {
  id?: number;
  title?: string;
  full_address?: any;
};

export interface SharedMapLocation {
  id?: number;
  lat: number;
  lng: number;
};

export interface SharedMedia {
  id?: number;
  file?: Media | null;
};

export interface SharedNavItem {
  id?: number;
  name: string;
  section_id?: "about" | "brands" | "catalogue" | "contacts";
};

export interface SharedNavbar {
  id?: number;
  navitems?: SharedNavItem[] | null;
};

export interface SharedPillar {
  id?: number;
  title: string;
  label: string;
};

export interface SharedProductionSection {
  id?: number;
  title?: string;
  description?: string;
  catchphrase?: string;
};

export interface AboutSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  sections_meta?: SectionsMeta | null;
  title: string;
  description: any;
};

export interface Brand {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  description?: string;
  logo?: Media | null;
};

export interface CatalogueSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  filter_text: string;
};

export interface Category {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name?: string;
};

export interface Contact {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  type: "whatsapp" | "telegram" | "email" | "phone" | "viber";
  link: string;
  title: string;
  icon: Media | null;
};

export interface FilterType {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
};

export interface Format {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
};

export interface Global {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  video_url?: string;
  Header?: SharedHeader | null;
  age_modal?: SharedAgeModal | null;
  about_content: SharedAboutContent | null;
  brands_section?: SharedBrandsSection | null;
  additional_about_section?: SharedAdditionalAboutSection | null;
  contacts_section?: SharedContactsSection | null;
  map_location?: SharedMapLocation | null;
  production_section?: SharedProductionSection | null;
  catchphrase?: string;
  catalogue?: SharedCatalogue | null;
  footer_section?: SharedFooter | null;
};

export interface HeaderSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  logo: Media | null;
  contacts?: Contact[] | null;
};

export interface HeroSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  sections_meta?: SectionsMeta | null;
  title: string;
  link?: SectionsMeta | null;
  button_text?: string;
};

export interface Message {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  phone?: string;
  email?: string;
  details?: string;
  work_status?: "read" | "unread" | "pending" | "answered";
};

export interface PillarSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  pillars_list?: SharedPillar[] | null;
};

export interface Product {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title: string;
  brand?: Brand | null;
  category?: Category | null;
  image?: Media | null;
  format?: Format | null;
  blend?: string;
  nicotine: string;
  tar: string;
  cigarette_length: string;
  filter_type?: FilterType | null;
  filter_length?: string;
  tobacco_length?: string;
  diameter?: string;
};

export interface ProductCard {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  description_fields?: SharedDescriptionField[] | null;
  close_text: string;
};

export interface ProductionSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  sections_meta?: SectionsMeta | null;
  title: string;
  description: any;
  left_image: Media | null;
  right_image: Media | null;
  button_text: string;
  button_url: string;
};

export interface SectionsMeta {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
};

export interface Subscriber {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  email: string;
};

export interface UploadItem {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  document?: Media | null;
  icon?: Media | null;
  title?: string;
};

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: { thumbnail: MediaFormat; small: MediaFormat; medium: MediaFormat; large: MediaFormat; };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}

export interface User {
  id?: number;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  role: Role | null | number;
};

export interface Role {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description: string;
  type: string;
};

export interface FindOne<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};

export interface FindMany<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};
