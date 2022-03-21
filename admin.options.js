const mongoose = require("mongoose");
const adminJs = require("adminjs");
const adminJsMongoose = require("@adminjs/mongoose");
const adminCompany = require("./company/company.admin");
const product = require("./company/company.product");
const credit = require("./company/company.credit");
const customer = require("./company/company.customer");
const userResource = require("./node_modules/admin-bro-users-permissions/src/resources/user");
const roleResource = require("./node_modules/admin-bro-users-permissions/src/resources/role");
// const { Credit } = require('./models/Credit');
// const { Customer } = require('./models/Customer');
// const { Product } = require('./models/Product');

// const userResource = require('../node_modules/admin-bro-users-permissions/src/resources/user');
// const roleResource = require('../node_modules/admin-bro-users-permissions/src/resources/role');

/** @type {AdminBro.AdminBroOptions} */

adminJs.registerAdapter(adminJsMongoose);

const options = {
  locale: {
    language: "fa-IR",
    translations: {
      labels: {
        navigation: "فهرست",
        loginWelcome: "مدیریت فروشگاه امیر",
        store: "فروشگاه",
        Credit: "نسیه ها",
        Customer: "فروشهای روزانه",
        Product: "محصولات",
        filters: "فیلتر کردن",
      },
      actions: {
        delete: "پاک کردن",
      },
      messages: {
        invalidCredentials: "کلمه عبور یا ایمیل شما اشتباه میباشد.",
        loginWelcome: "سیستم مدیریت فروشگاه امیر",
        welcomeOnBoard_title: "فروشگاه الکتریکی امیر",
        welcomeOnBoard_subtitle: "",
        noRecordsInResource: "اطلاعاتی یافت نشد.",
      },
      buttons: {
        resetFilter: "پاک کردن فیلتر",
        applyChanges: "فیلتر کن",
      },
      resources: {
        Credit: {
          actions: {
            new: "افزودن",
            list: "لیست نسیه ها",
            edit: "ویرایش",
            show: "نمایش اطلاعات",
          },
          properties: {
            fullName: "نام و نام خانوادگی",
            product: "محصول",
            price: "مبلغ نسیه به تومان",
          },
          buttons: {
            filter: "فیلتر",
            save: "بروزرسانی",
            confirmRemovalMany: "از پاک کردن این {{count}} نسیه مطمئن هستید؟",
            confirmRemovalMany_plural:
              "از پاک کردن این {{count}} نسیه ها مطمئن هستید؟",
            createFirstRecord: "افزودن اولین نسیه",
          },
        },
        Product: {
          actions: {
            new: "افزودن",
            list: "لیست محصولات",
            edit: "ویرایش",
            show: "نمایش محصول",
          },
          properties: {
            name: "نام محصول",
            price: "قیمت به تومان",
            stock: "موجودی انبار",
          },
          buttons: {
            filter: "فیلتر",
            save: "بروزرسانی",
            confirmRemovalMany: "از پاک کردن این {{count}} محصول مطمئن هستید؟",
            confirmRemovalMany_plural:
              "از پاک کردن این {{count}} محصولات مطمئن هستید؟",
            createFirstRecord: "افزودن اولین محصول",
          },
        },
        Customer: {
          actions: {
            new: "افزودن",
            list: "لیست فروشها",
            edit: "ویرایش",
            show: "نمایش جزئیات",
          },
          properties: {
            product: "محصول",
            price: "قیمت به تومان",
          },
          buttons: {
            filter: "فیلتر",
            save: "بروزرسانی",
            confirmRemovalMany: "از پاک کردن این {{count}} محصول مطمئن هستید؟",
            confirmRemovalMany_plural:
              "از پاک کردن این {{count}} محصولات مطمئن هستید؟",
            createFirstRecord: "افزودن اولین محصول",
          },
        },
      },
    },
  },
  resources: [credit, product, customer],
  assets: {
    styles: ["/styles/styles.css"],
  },
  rootPath: "/admin",
  branding: {
    companyName: "فروشگاه الکتریکی امیر",
    logo: "/images/logo.png",
    favicon: "/images/favicon.ico",
    softwareBrothers: false,
  },
};

module.exports = options;
