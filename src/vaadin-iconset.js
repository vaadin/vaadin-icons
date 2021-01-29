import { camelToDashCase } from '@polymer/polymer/lib/utils/case-map.js';

const iconRegistry = {};

class VaadinIconset {
  constructor(namespace) {
    this.namespace = namespace;
    this.icons = {};
  }

  getIcon(name) {
    return this.icons[name];
  }

  addIcon(name, icon) {
    this.icons[camelToDashCase(name)] = icon;
  }
}

const getIconset = (namespace) => {
  let iconset = iconRegistry[namespace];
  if (!iconset) {
    iconset = new VaadinIconset(namespace);
    iconRegistry[namespace] = iconset;
  }
  return iconset;
}

export const getIcon = (namespace, name) => {
  return getIconset(namespace).getIcon(name);
}

export const setIcons = (namespace, icons) => {
  const iconset = getIconset(namespace);
  Object.entries(icons).forEach(([name, icon]) => {
    iconset.addIcon(name, icon);
  });
};
