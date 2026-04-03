<template>
    <main class="legal-page">
        <section class="container">
            <h1>Warunki użytkowania</h1>
            <p class="intro">
                Poniższe warunki określają zasady korzystania ze strony Biura
                Kosztorysowania Robót Budowlanych. Korzystając ze strony, akceptujesz
                te warunki.
            </p>

            <div class="legal-block">
                <h2>Zakres serwisu</h2>
                <p>
                    Strona ma charakter informacyjny i prezentuje ofertę usług
                    kosztorysowych. Treści nie stanowią oferty w rozumieniu Kodeksu
                    cywilnego.
                </p>
            </div>

            <div class="legal-block">
                <h2>Kontakt i zapytania</h2>
                <p>
                    Przesłanie zapytania przez formularz lub email nie stanowi
                    zawarcia umowy. Ostateczne warunki realizacji usługi są
                    potwierdzane indywidualnie.
                </p>
            </div>

            <div class="legal-block">
                <h2>Prawa autorskie</h2>
                <p>
                    Wszystkie treści, znaki i materiały na stronie są chronione
                    prawem autorskim. Zabrania się ich kopiowania i rozpowszechniania
                    bez zgody administratora.
                </p>
            </div>

            <div class="legal-block">
                <h2>Odpowiedzialność</h2>
                <p>
                    Dokładamy starań, aby treści były aktualne i poprawne, jednak nie
                    ponosimy odpowiedzialności za decyzje podjęte na podstawie
                    informacji ze strony.
                </p>
            </div>

            <div class="legal-block">
                <h2>Zmiany warunków</h2>
                <p>
                    Zastrzegamy sobie prawo do zmiany warunków użytkowania. Aktualna
                    wersja jest publikowana na tej stronie.
                </p>
            </div>

            <div class="legal-block">
                <h2>Dane kontaktowe</h2>
                <p>
                    Biuro Kosztorysowania Robót Budowlanych<br />
                    45-220 Opole, ul. Plac Oleandrów 33<br />
                    biurko@kosztorysy.pl<br />
                    +48 77 409 85 21
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

.legal-block p {
    color: var(--text-main);
    line-height: 1.6;
}

.updated {
    margin-top: 30px;
    font-size: 0.9rem;
    color: var(--text-muted);
}
</style>
