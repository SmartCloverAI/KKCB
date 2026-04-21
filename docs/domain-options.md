# Domain options

Date checked: `2026-04-21`

These options were ranked for a Romanian nonprofit chapter site. The order balances trust, clarity, brand alignment, memorability, and likely day-to-day usability.

## Top 10

| Rank | Domain | Why it works | Registry status | Cloudflare search |
|---|---|---|---|---|
| 1 | `kkcbromania.org` | Best operational balance of short, clear, and chapter-specific. | Unregistered at PIR RDAP check time | `https://domains.cloudflare.com/?domain=kkcbromania.org` |
| 2 | `kidskickingcancerromania.org` | Clearest public explanation of who the organization is. | Unregistered at PIR RDAP check time | `https://domains.cloudflare.com/?domain=kidskickingcancerromania.org` |
| 3 | `kidskickingcancerwithbudoromania.org` | Most faithful to the full Romanian chapter identity. | Unregistered at PIR RDAP check time | `https://domains.cloudflare.com/?domain=kidskickingcancerwithbudoromania.org` |
| 4 | `kkcwithbudo.org` | Compact and still recognizably tied to the program. | Unregistered at PIR RDAP check time | `https://domains.cloudflare.com/?domain=kkcwithbudo.org` |
| 5 | `kkcbudo.org` | Very short and easy to communicate verbally. | Unregistered at PIR RDAP check time | `https://domains.cloudflare.com/?domain=kkcbudo.org` |
| 6 | `kidskickingcancerwithbudo.org` | Strong brand fidelity, but risks sounding like the global canonical site rather than the Romanian chapter. | Unregistered at PIR RDAP check time | `https://domains.cloudflare.com/?domain=kidskickingcancerwithbudo.org` |
| 7 | `kickcancerwithbudo.org` | Memorable campaign-style framing, less institutional. | Unregistered at PIR RDAP check time | `https://domains.cloudflare.com/?domain=kickcancerwithbudo.org` |
| 8 | `budoforkidsromania.org` | Friendly and easy to understand, but weaker on direct brand continuity. | Unregistered at PIR RDAP check time | `https://domains.cloudflare.com/?domain=budoforkidsromania.org` |
| 9 | `kidskickcancerromania.org` | Shorter than the full phrase, but slightly less polished as a formal brand. | Unregistered at PIR RDAP check time | `https://domains.cloudflare.com/?domain=kidskickcancerromania.org` |
| 10 | `budoagainstfear.org` | Strong campaign/supporter domain, weakest as the main institutional domain. | Unregistered at PIR RDAP check time | `https://domains.cloudflare.com/?domain=budoagainstfear.org` |

## Recommended acquisition order

1. Buy `kkcbromania.org` as the primary domain.
2. Buy `kidskickingcancerromania.org` as the strongest defensive redirect.
3. If budget allows, also secure `kidskickingcancerwithbudoromania.org`.

## Cloudflare verification note

Cloudflare now provides:

- a public `.org` registrar search page
- an authenticated Registrar API search/check flow

Official references:

- Cloudflare `.org` purchase page: `https://www.cloudflare.com/application-services/products/registrar/buy-org-domains/`
- Cloudflare Registrar API overview: `https://developers.cloudflare.com/registrar/registrar-api/`
- Cloudflare authoritative availability check API: `https://developers.cloudflare.com/api/resources/registrar/methods/check`

In this environment I could not complete Cloudflare's live search/check directly because:

- the public search endpoint on `domains.cloudflare.com` presented a Cloudflare browser challenge to CLI requests
- no Cloudflare account ID or Registrar API token were configured for the authenticated `domain-check` API

Because of that, the availability status above is based on authoritative `.org` registry RDAP checks from Public Interest Registry. That is a stronger signal than DNS, but final purchase should still be confirmed inside Cloudflare immediately before checkout.
