<p align="center">
  <a href="https://ant.design">
    <img width="200" src="https://developer.e-mongolia.mn/img/logo-new.svg">
  </a>
</p>

<h1 align="center">E-mongolia хөгжүүлэгчийн гарын авлага</h1>

<div align="center">

![GitHub package.json version](https://img.shields.io/github/package-json/v/astvision/e-mongolia-api-doc?style=flat-square)
[![Generic badge](https://img.shields.io/badge/Built%20with-Docusaurus-color.svg)](https://v2.docusaurus.io/)

</div>

Энэхүү сайт нь [Docusaurus 2](https://v2.docusaurus.io/) гэх бэлэн статик сайт хийхэд зориулагдсан багажд тулгуурлан хийгдсэн.

## Суулгац, шаардлагатай багцуудыг суулгах

```console
npm install
```

## Хөгжүүлэлтийн орчинд ажиллуулах

```console
npm start
```

Хөгжүүлэлтийн орчинд nodejs сервер дээр ажиллаж кодын өөрчлөлтийг автоматаар мэдэрч ажиллана.

## Сайтыг deploy хийхэд бэлдэх

```console
npm run build
```

Энэ командаар сайтыг deploy хийхэд бэлдэхэд шаардлагатай статик html хуудсуудыг `build` хавтасанд үүсгэж өгнө.
Жич: Github pages дээр хостлох бол энэ командыг ажиллуулаад байх шаардлагагүй шууд `GIT_USER=astvision npm run deploy` командыг ажиллуулахад болно.

## Сайтыг deploy хийх

```console
GIT_USER=astvision npm run deploy
```

Энэ командаар Github pages хоструу сайтыг автоматаар deploy хийнэ. Github pages хост дээр ажиллах статик файлууд `gh-pages` салбараас уншигдана.

# Сайтад өөрчлөлт оруулах

Ерөнхий байдлаар тайлбар оруулсан бөгөөд [Docusaurus site](https://v2.docusaurus.io/)-аас дэлгэрэнгүй documentation хараарай.

## Docs хэсэг

`docs` хавтаст үндсэн documentation файлууд байрлах ба доторх файлууд нь `.md,mdx` файлуудаас бүрдэх бөгөөд `.mdx` файл нь дурын React component-ыг оруулж ирэн ашиглаж болдгоороо онцлог юм.

```text
---
id: intro
title: Оператор системийн танилцуулга
sidebar_label: Танилцуулга
---
```

MD, MDX файл бүр дээрх бүтэцийг агуулсан байх ба

- `id`-утга нь сайт дээрх path болно. `/intro`
  - docs хавтаст байрлах `mobile/service-request/create.mdx` файл нь `create` гэсэн id авах бөгөөд `/mobile/service-request/create` хаягын зам болно.
- `title`-Doc хуудсын гарчиг хэсэг
- `sidebar_label`-Sidebar дээрх гарчиг

## Pages хэсэг

`src/pages` хавтаст байрлах файлуудын нэрээр сайтын хаягын замчлал тодорхойлогдоно. `services.js` файл нь `/services` хаягын зам болно.
Ямар ч хуудас үүсгэж болно.

## Гарын авлага хуудсын хажуугийн хэсэг `sidebar.js`

```javascript
{
  type: 'category',
  label: 'Мобайл систем',
  collapsed: false,
  items: [
    'mobile/intro',
    {
      type: 'category',
      label: 'Үйлчилгээний хүсэлт',
      items: ['mobile/service-request/list', 'mobile/service-request/create', 'mobile/service-request/detail']
    }
  ]
},
```

Sidebar хэсэг нь `docs` хавтаст байрлах `.md,mdx` файлуудын нэрээр object байдлаар тохируулсан `sidebar.js` файлаас уншигдана.
`mobile/intro` гэсэн тохиргоо нь `mobile` хавтасын `intro.md` файлыг илтгэнэ.

## Plugin хэсэг

`plugins/data-loader/index.js` файлаас `data-loader` плагин уншиж ажиллаж эхлэнэ.  
Энэ плагин нь үйлчилгээний мэдээлэл болон байгууллагын мэдээлэлийг сервисээс дуудаж статикаар хадгалахад зориулагдсан custom плагин юм.

```javascript
// api call хийж датагаа бэлдэнэ.
async loadContent() {}
// бэлдсэн датагаа content хувьсагчаас авч actions.setGlobalData() функцээр статик файлруу хадгална.
async contentLoaded({content, actions}) {} 
```

Плагин датагаа ашиглахын тулд

```javascript
import {usePluginData} from '@docusaurus/useGlobalData';

const {orgData} = usePluginData('data-loader');
```

гэж дуудаж ашиглана.

## Docusaurus тохиргооны файл `docusaurus.config.js`

- `title`-Сайтын гарчиг текст
- `tagline`-Сайтын тайлбар текст
- `url`-Сайтын хаяг
- `projectName`-Github дээрх repo нэр
- `customFields`-Дурын хувьсагчууд (хаана ч ашиглаж болно)
- `announcementBar`-Сайтын дээр байрлах зарлал мэдээлэл
- `navbar.items`-Header хэсгийн хаягууд
- `footer`-Footer хэсгийн хаягууд
- `plugins`-Шаардлагатай плагинууд
  - `path.resolve(__dirname, 'plugins', 'data-loader')`- `data-loader` гэсэн Custom-оор ашиглагдах плагин
- `presets`-Docs, Blog хэсгийн тохиргоо
