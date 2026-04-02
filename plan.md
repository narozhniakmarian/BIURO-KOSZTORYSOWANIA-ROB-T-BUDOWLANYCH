
редизайн застарілого сайту. референс reference1.png, reference2.png, http://kosztorysy.pl/index.html, http://kosztorysy.pl/p2.htm
# Landing Page — Biuro Kosztorysowania Robót Budowlanych

## Вхідні дані зі старого сайту

- **Назва**: BIURO KOSZTORYSOWANIA ROBÓT BUDOWLANYCH
- **Адреса**: 45-220 OPOLE, ul. Plac Oleandrów 33
- **Телефон**: +48 77 409 85 21 lub 501 606 048
- **Email**: biurko@kosztorysy.pl
- **Слоган**: "Jeśli budujesz lub będziesz budować, jeśli remontujesz, modernizujesz, lub będziesz modernizował i bardzo chcesz wiedzieć ile możesz wydać, ile musisz wydać, a ile możesz zaoszczędzić? — Bo to jest dla Ciebie najważniejsze! Kosztorysowanie robót budowlanych."
- **CTA**: "To powinieneś skorzystać z naszych usług!"
- **Переваги**: "Nasze opracowania kosztorysów wykonujemy szybko, sprawnie i tanio. Stałym Klientom oferujemy wysokie rabaty."

## План реалізації

### 1.  логотип 
Файл `BIURO KOSZTORYSOWANIA ROBÓT BUDOWLANYCH_logo.svg`
### favicon
Файл `favicon.ico`

### 2. Оновити дизайн-систему 
Кольори на основі брендингу: темно-синій (#1a2744), помаранчевий/золотий (#d4951a), світлий фон (#f8f9fa).

### 3. Оновити 
Title і мета-теги польською: "Biuro Kosztorysowania Robót Budowlanych"

### 4. Створити — Landing Page
Секції зверху вниз:

- **Header/Nav** — логотип + назва компанії, навігація (O nas, Usługi, Kontakt)
- **Hero** — слоган зі старого сайту (переписаний сучасніше), CTA кнопка "Skontaktuj się", авто свайпер з 3 слайдів файли 'hero1.webp', 'hero2.webp', 'hero3.webp', анімація під сам скролу.
- **Usługi** — картки послуг з іконками (Lucide): kosztorysy inwestorskie, ofertowe, powykonawcze, przedmiary robót, weryfikacja kosztorysów
- **Dlaczego my** — 3-4 переваги: szybko, sprawnie, tanio + rabaty dla stałych klientów
- **Kontakt** — контактна інформація (адреса, телефони, email) + проста форма (ім'я, email, повідомлення), гугл мапа.
- **Footer** — копірайт, повтор контактів

### 5. Видалити 
Непотрібні стилі з шаблону.

### Технічні деталі
- Всі компоненти в одному файлі стилі в окремому файлі (landing page)
- Smooth scroll навігація між секціями
- Адаптивний дизайн (mobile-first)
- Використання mui/ui компонентів/
- Іконки:  (Building, Calculator, Phone, Mail, MapPin, Clock, Shield, Award)
- Форма контакту — клієнтська (toast при відправці)
стек vue.js, css/scss, nuxt.js, mui.
солідне seo оптимізація (meta теги, семантична розмітка, швидкість завантаження, sitemap.xml, robots.txt)
