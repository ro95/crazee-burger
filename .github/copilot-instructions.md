# Instructions Copilot

## Principes

- **Separation of Concerns** : chaque fichier/fonction a une seule responsabilité
- **Clean Code** : code lisible, noms explicites, fonctions courtes (<20 lignes idéalement)
- **DRY** : éviter la duplication, extraire la logique commune

## Stack

- React 18 + TypeScript
- Axios pour les appels API

## Conventions

- Composants fonctionnels avec hooks uniquement
- Nommage : PascalCase (composants), camelCase (fonctions/variables)
- Pas de `any`, typer explicitement
- Commentaires en français

## Structure

- `/components` → Composants réutilisables (UI uniquement, pas de logique métier)
- `/hooks` → Custom hooks (logique réutilisable)
- `/services` → Appels API avec Axios
- `/types` → Interfaces et types TypeScript
- `/utils` → Fonctions helpers pures

## Patterns

### Hooks custom
```tsx
// ✅ Bon
export function useUser(id: string): User | null { ... }

// ❌ Éviter
export const useUser = (id) => { ... }
```

### Composants
```tsx
// ✅ Bon : props typées, logique extraite
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

// ❌ Éviter : props non typées, inline styles
export const Button = (props: any) => (
  <button style={{ color: 'red' }} onClick={props.onClick}>{props.label}</button>
);
```

## À éviter

- jQuery
- CSS inline
- `any` en TypeScript
- Logique métier dans les composants (extraire dans des hooks ou services)
- Fichiers de plus de 150 lignes