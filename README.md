# Airbean Analysis

## Olika flöden: 

### Del-flöden:

1. **Beställning**:

    - Visa menyn.
    - Välja kaffesort och extra val.
    - Visa att artiklar läggs till i kundvagnen.
    - Öppna kundvagnen och bekräfta order (adress, betalning m.m.).

2. **Leverans**:

    - Beställning skickas till Airbean.
    - Kaffet bryggs och packas i drönare.
    - Drönaren levererar ordern till kundens adress.

3. **Orderstatus**:

    - Öppna navigationen.
    - Visa aktuell orderstatus och leveranstid.

4. **Användarhantering**:

    - Logga in eller skapa konto.
    - Enkelt beställa som gäst utan konto.

5. **Orderhistorik**:

    - Öppna navigationen.
    - Gå till profil och visa orderhistorik.

6. **Informationssida**:
    - Visa detaljerad information om kaffet och hållbarhet.


### Huvudflöde

Airbean förenklar användarupplevelsen med ett tydligt och logiskt
beställningsflöde:

1. Kunden väljer kaffesort/er, storlek och extra val.
2. Kunden fyller i leveransadress.
3. Kunden betalar via Bank-ID, Swish eller Klarna.
4. Beställningen skickas till Airbean.
5. Kaffet packas och drönaren designeras.
6. Ordern levereras till kundens adress.

---

## Kundbeteenden

Vid analys av kundbeteenden identifierades följande viktiga faktorer:

-   **Lättnavigerat**:
    -   Navigera till menyn från alla sidor.
-   **Bekräftelse av pågående beställning**:
    -   Information om att beställningen är på väg och leveranstid.
-   **Få klick till beställning**:
    -   Halv-automatisk tjänst med minimal interaktion.
-   **Ekologisk profil**:
    -   Grafisk design med naturinspirerade färger och hållbarhet.
-   **Analyserade preferenser**:
    -   Mest köpta kaffe visas högst i menyn.
-   **Leveranstid**:
    -   Tydlig information om när kaffet förväntas levereras.
-   **Återkommande order**:
    -   Sparar personlig information för snabbare framtida beställningar.
-   **Avbrutna order**:
    -   Möjlighet att pausa eller ångra beställning.
-   **Support**:
    -   Chatt eller telefonnummer vid problem.
-   **Beställningstoppar**:
    -   Hantering av hög belastning under frukost och fika.

---

### Avgränsningar egna tolkningar



---

# Analys av datalogiska delprocesser

Projektet analyserades utifrån de fyra datalogiska delprocesserna:
**Decomposition**, **Pattern Recognition**, **Abstraction** och **Algorithm
Design**.

## Decomposition (Bryta ner)

-   Huvudfunktioner: Landningssida, meny, varukorg, betalningsflöde,
    orderstatus, orderhistorik, och informationssida.
-   Flöden: Beställning, leverans, och användarhantering.

## Pattern Recognition (Mönsterigenkänning)

-   **Återkommande flöden**:
    -   Alla användare följer samma beställningsprocess.
-   **Produktinformation**:
    -   Standardiserad presentation av produkter.
-   **Återkommande behov**:
    -   Funktioner som snabb navigering och sparade preferenser.

## Abstraction

 ###Funktioner:

-   Leverans med drönare.
-   Välja kaffesort.
-   Navigera i meny.
-   Logga in.
-   Skapa konto.
-   Kolla orderstatus.
-   Se orderhistorik.
-   Lägga en beställning.
-   Anpassa leveranstid.
-   Ta del av erbjudanden, nyheter och information.
-   Visa artiklar i kundvagnen när det läggs till.
-   Enkel gästbeställningsprocess.
-   Prenumerationstjänst.
-   Informationssida med information om kaffet.
-   Minimera val och steg.

## Algorithm Design (Utforma algoritmer)

Lite olika algoritmer som man skulle kunna använda i en app som AirBean för att öka användarvänligheten men också själva leveransen och lönsamheten.

- **FIFO-algoritm**: Hanterar inkommande beställningar och levererar dem i ordning de kom in, vilket säkerställer effektiv orderhantering.
- **Dijkstra/A*-algoritm**: Optimera drönarens rutt för att hitta den snabbaste och mest effektiva vägen till kunden.
- **Rekommendationsalgoritmer**: Analyserar användarens preferenser för att föreslå produkter baserat på tidigare val och andra användares beteenden.
- **Observer-pattern**: Ger realtidsuppdateringar om beställningens status, såsom när den är packad eller på väg.
---

## Sammanfattning
