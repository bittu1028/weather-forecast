export interface IHeaderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  searchQuery: string;
  isSearching: boolean;
  onSearchWeather: () => void;
}
