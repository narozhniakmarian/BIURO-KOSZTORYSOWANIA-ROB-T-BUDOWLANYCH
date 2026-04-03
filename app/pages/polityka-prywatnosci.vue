<template>
    <main class="legal-page">
        <section class="container">
            <h1>Polityka prywatności</h1>
            <p class="intro">
                Dbamy o Twoją prywatność. Poniżej znajdziesz informacje o tym,
                jak przetwarzamy dane osobowe w związku z korzystaniem z naszej
                strony i kontaktu z biurem.
            </p>

            <div class="legal-block">
                <h2>Administrator danych</h2>
                <p>
                    Administratorem danych jest Biuro Kosztorysowania Robót
                    Budowlanych, 45-220 Opole, ul. Plac Oleandrów 33, email:
                    biurko@kosztorysy.pl, tel. +48 77 409 85 21.
                </p>
            </div>

            <div class="legal-block">
                <h2>Zakres danych</h2>
                <p>
                    Przetwarzamy dane przekazane w formularzu kontaktowym lub
                    korespondencji, w szczególności imię i nazwisko, adres
                    email, numer telefonu oraz treść zapytania.
                </p>
            </div>

            <div class="legal-block">
                <h2>Cele i podstawa prawna</h2>
                <ul>
                    <li>
                        kontakt i przygotowanie oferty — art. 6 ust. 1 lit. b
                        RODO
                    </li>
                    <li>obsługa zapytań — art. 6 ust. 1 lit. f RODO</li>
                    <li>
                        obowiązki prawne i księgowe — art. 6 ust. 1 lit. c RODO
                    </li>
                </ul>
            </div>

            <div class="legal-block">
                <h2>Okres przechowywania</h2>
                <p>
                    Dane przechowujemy przez czas niezbędny do realizacji celu,
                    a w przypadku dokumentacji rozliczeniowej — zgodnie z
                    obowiązującymi przepisami.
                </p>
            </div>

            <div class="legal-block">
                <h2>Odbiorcy danych</h2>
                <p>
                    Dane mogą być przekazywane podmiotom wspierającym nas w
                    obsłudze IT i hostingu, wyłącznie w zakresie niezbędnym do
                    świadczenia usług.
                </p>
            </div>

            <div class="legal-block">
                <h2>Prawa użytkownika</h2>
                <p>
                    Masz prawo dostępu do danych, ich sprostowania, usunięcia,
                    ograniczenia przetwarzania, sprzeciwu oraz przenoszenia
                    danych. Masz także prawo złożyć skargę do UODO.
                </p>
            </div>

            <div class="legal-block">
                <h2>Pliki cookies</h2>
                <p>
                    Strona używa plików cookies w celu zapewnienia poprawnego
                    działania oraz statystyki ruchu. Zgodę na cookies możesz
                    zmienić w ustawieniach przeglądarki.
                </p>
            </div>

            <p class="updated">Ostatnia aktualizacja: 2025-01-01</p>
        </section>
    </main>
</template>

<style scoped>
.legal-page {
    padding: 120px 20px;
    background: var(--bg-light);
}

.container {
    max-width: 900px;
    margin: 0 auto;
}

h1 {
    font-size: 2.6rem;
    margin-bottom: 20px;
    color: var(--primary);
}

.intro {
    color: var(--text-muted);
    margin-bottom: 40px;
}

.legal-block {
    margin-bottom: 28px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.legal-block h2 {
    font-size: 1.2rem;
    color: var(--primary);
    margin-bottom: 10px;
}

.legal-block p,
.legal-block li {
    color: var(--text-main);
    line-height: 1.6;
}

ul {
    padding-left: 18px;
}

.updated {
    margin-top: 30px;
    font-size: 0.9rem;
    color: var(--text-muted);
}
</style>
