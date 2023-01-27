const colors = {
  galaxy: "#181B28",
  dwarf_star: "#B9C3D5",
  supernova: "#F8F8F0",
  vision: "#DDA2F6",
  power: "#9D65FF",
  time: "#58EBD7",
  soul: "#FABC2A",
  reality: "#FF206E",
  crescent_moon: "#705FBD",
  shadow_moon: "#2A3049",
  space: "#00A1E4",
};

module.exports = {
  name: "thanos-theme",
  displayName: "Thanos Theme",
  theme: {
    background: {
      default: colors.galaxy,
      success: colors.space,
      notice: colors.time,
      warning: colors.soul,
      danger: colors.reality,
      surprise: colors.crescent_moon,
      info: colors.power,
    },
    foreground: {
      default: colors.dwarf_star,
      success: colors.supernova,
      notice: colors.supernova,
      warning: colors.shadow_moon,
      danger: colors.supernova,
      surprise: colors.supernova,
      info: colors.supernova,
    },
    highlight: {
      default: "rgba(112,95,189, 1)",
      xxs: "rgba(112,95,189, 0.05)",
      xs: "rgba(112,95,189, 0.1)",
      sm: "rgba(112,95,189, 0.2)",
      md: "rgba(112,95,189, 0.4)",
      lg: "rgba(112,95,189, 0.6)",
      xl: "rgba(112,95,189, 0.8)",
    },
    styles: {
      sidebar: {
        background: {
          default: colors.galaxy,
        },
      },
      pane: {
        background: {
          success: colors.vision,
          notice: colors.time,
          warning: colors.soul,
          danger: colors.reality,
          surprise: colors.space,
          info: colors.crescent_moon,
        },
      },
      paneHeader: {
        background: {
          success: colors.space,
          notice: colors.time,
          warning: colors.soul,
          danger: colors.reality,
          surprise: colors.crescent_moon,
          info: colors.vision,
        },
        foreground: {
          default: colors.supernova,
          success: colors.dwarf_star,
          notice: colors.dwarf_star,
          warning: colors.shadow_moon,
          danger: colors.dwarf_star,
          surprise: colors.supernova,
          info: colors.dwarf_star,
        },
      },
      dialog: {
        background: {
          default: colors.galaxy,
        },
      },
      transparentOverlay: {
        background: {
          default: "rgba(42,48,73, .5)",
        },
      },
    },
  },
};
