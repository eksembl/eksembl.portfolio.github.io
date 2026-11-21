# Portfolio Eksembl

Портфолио на [Hugo](https://gohugo.io/) с темой [Terminal](https://github.com/panr/hugo-theme-terminal).

## Структура

- `content/` — тексты: главная, `about/`, проекты и заметки в Markdown.
- `layouts/` — шаблоны Hugo (карточка проекта, список проектов, общий `baseof`).
- `assets/css/` — кастомизация темы (`custom.css`, `terminal.css`).
- `static/` — иконки, изображения, `CNAME` с доменом.
- `themes/terminal/` — сама тема (git submodule).

## Локальный запуск

```bash
hugo server
```

Сборка в `public/`:

```bash
hugo --minify --gc --baseURL "https://eksembl.dev/"
```

## Деплой

Пуш в `main` запускает GitHub Actions (`.github/workflows/deploy.yml`): Hugo собирает сайт,
артефакт `public/` загружается в GitHub Pages и публикуется на `https://eksembl.dev/`.

Домен закреплён в `static/CNAME` и в настройках Pages, поэтому он сохраняется при каждом деплое.
