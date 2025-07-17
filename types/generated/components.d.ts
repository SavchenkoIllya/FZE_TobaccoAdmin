import type { Schema, Struct } from '@strapi/strapi';

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

export interface SharedFilterItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_filter_items';
  info: {
    displayName: 'Filter Item';
  };
  attributes: {
    brands: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'>;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    filter_types: Schema.Attribute.Relation<
      'oneToMany',
      'api::filter-type.filter-type'
    >;
    query_key: Schema.Attribute.Enumeration<
      ['brand', 'format', 'filter-type']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'brand'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<['field', 'textarea']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'field'>;
  };
}

export interface SharedMap extends Struct.ComponentSchema {
  collectionName: 'components_shared_maps';
  info: {
    displayName: 'Map';
  };
  attributes: {
    lat: Schema.Attribute.Float & Schema.Attribute.Required;
    lng: Schema.Attribute.Float & Schema.Attribute.Required;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contact': SharedContact;
      'shared.description-field': SharedDescriptionField;
      'shared.filter-item': SharedFilterItem;
      'shared.input': SharedInput;
      'shared.map': SharedMap;
      'shared.pillar': SharedPillar;
    }
  }
}
