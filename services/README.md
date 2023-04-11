# Service Architecture Diagram

```mermaid
flowchart TD
    A[pano.kamp.us] <-->E
    B[sozluk.kamp.us] <-->E
    C[link.kamp.us] <-->E
    D[pasaport.kamp.us] <--> I
    E{graphql.kamp.us}
    E <--> F[PanoTwirp]
    F <--> H
    E <--> G[SozlukTwirp]
    G <--> H
    E <--> H[LinkTwirp]
    E <--> I[UsersTwirp]
```