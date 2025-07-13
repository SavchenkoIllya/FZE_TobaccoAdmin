import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_contents';
  info: {
    displayName: 'About_content';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'            We are a passionate tobacco manufacturer committed to delivering             high-quality, affordable cigarettes for adult smokers. With more             than a decade of expertise, our company blends time-honored tobacco             traditions with modern innovation to create products that stand out             in both taste and reliability. While our brand may not yet be widely             known, we are driven by a clear philosophy: every smoker deserves             access to quality without compromise. We focus on craftsmanship,             consistency, and honest pricing \u2014 values that define who we are and             what we offer. Proudly serving both domestic and international             markets, we continue to expand our reach while maintaining the             integrity and care that go into every product we make.'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'About us'>;
    main_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'our promise:'>;
    pillars: Schema.Attribute.Component<'shared.pillar', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 3;
        },
        number
      >;
    secondary_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Tradition. Quality. Affordability.'>;
  };
}

export interface SharedAdditionalAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_additional_about_sections';
  info: {
    displayName: 'Additional About Section';
  };
  attributes: {
    description_main: Schema.Attribute.Text & Schema.Attribute.Required;
    description_secondary: Schema.Attribute.Text;
    title_main: Schema.Attribute.String & Schema.Attribute.Required;
    title_secondary: Schema.Attribute.String;
  };
}

export interface SharedAgeModal extends Struct.ComponentSchema {
  collectionName: 'components_shared_age_modals';
  info: {
    displayName: 'Age Modal';
  };
  attributes: {
    cancel_button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Cancel'>;
    confirm_button: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'OK'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    main_text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedBrandsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_brands_sections';
  info: {
    displayName: 'brands_section';
  };
  attributes: {
    brands: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCatalogue extends Struct.ComponentSchema {
  collectionName: 'components_shared_catalogues';
  info: {
    displayName: 'Catalogue';
  };
  attributes: {
    brands: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'>;
    formats: Schema.Attribute.Relation<'oneToMany', 'api::format.format'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Catalogue'>;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['whatsapp', 'telegram', 'email', 'phone', 'viber']
    >;
  };
}

export interface SharedContactList extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_lists';
  info: {
    displayName: 'Contact List';
  };
  attributes: {
    contacts: Schema.Attribute.Relation<'oneToMany', 'api::contact.contact'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts_sections';
  info: {
    displayName: 'Contacts section';
  };
  attributes: {
    form_inputs: Schema.Attribute.Component<'shared.input', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Contacts'>;
    send_button: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedDescriptionField extends Struct.ComponentSchema {
  collectionName: 'components_shared_description_fields';
  info: {
    displayName: 'Description Field';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    property: Schema.Attribute.Enumeration<
      [
        'blend',
        'cigarette_length',
        'nicotine',
        'tar',
        'filter_type',
        'diameter',
        'filter_length',
        'tobacco_length',
      ]
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedDocumentItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_document_items';
  info: {
    displayName: 'Document Item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    upload: Schema.Attribute.Media<'files'>;
  };
}

export interface SharedDocumentsList extends Struct.ComponentSchema {
  collectionName: 'components_shared_documents_lists';
  info: {
    displayName: 'Documents list';
  };
  attributes: {
    title: Schema.Attribute.String;
    upload_items: Schema.Attribute.Relation<
      'oneToMany',
      'api::upload-item.upload-item'
    >;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contact_list: Schema.Attribute.Component<'shared.contact-list', false>;
    copyrights: Schema.Attribute.String;
    document_list: Schema.Attribute.Component<'shared.documents-list', false>;
    legal_info: Schema.Attribute.Component<'shared.legal-info', false>;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    contacts: Schema.Attribute.Relation<'oneToMany', 'api::contact.contact'>;
    logo: Schema.Attribute.Media<'images'>;
    navbar: Schema.Attribute.Component<'shared.navbar', false>;
  };
}

export interface SharedInput extends Struct.ComponentSchema {
  collectionName: 'components_shared_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    field_name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Name'>;
    type: Schema.Attribute.Enumeration<['field', 'textarea']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'field'>;
  };
}

export interface SharedLegalInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_legal_infos';
  info: {
    displayName: 'Legal Info';
  };
  attributes: {
    full_address: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedMapLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_map_locations';
  info: {
    displayName: 'Map Location';
  };
  attributes: {
    lat: Schema.Attribute.Float &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<48.6149893>;
    lng: Schema.Attribute.Float &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<17.8352878>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_items';
  info: {
    displayName: 'Nav Item';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    section_id: Schema.Attribute.Enumeration<
      ['about', 'brands', 'catalogue', 'contacts']
    >;
  };
}

export interface SharedNavbar extends Struct.ComponentSchema {
  collectionName: 'components_shared_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    navitems: Schema.Attribute.Component<'shared.nav-item', true>;
  };
}

export interface SharedPillar extends Struct.ComponentSchema {
  collectionName: 'components_shared_pillars';
  info: {
    displayName: 'Pillar';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'year of experience'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'1'>;
  };
}

export interface SharedProductionSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_production_sections';
  info: {
    displayName: 'Production Section';
  };
  attributes: {
    catchphrase: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-content': SharedAboutContent;
      'shared.additional-about-section': SharedAdditionalAboutSection;
      'shared.age-modal': SharedAgeModal;
      'shared.brands-section': SharedBrandsSection;
      'shared.catalogue': SharedCatalogue;
      'shared.contact': SharedContact;
      'shared.contact-list': SharedContactList;
      'shared.contacts-section': SharedContactsSection;
      'shared.description-field': SharedDescriptionField;
      'shared.document-item': SharedDocumentItem;
      'shared.documents-list': SharedDocumentsList;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.input': SharedInput;
      'shared.legal-info': SharedLegalInfo;
      'shared.map-location': SharedMapLocation;
      'shared.media': SharedMedia;
      'shared.nav-item': SharedNavItem;
      'shared.navbar': SharedNavbar;
      'shared.pillar': SharedPillar;
      'shared.production-section': SharedProductionSection;
    }
  }
}
