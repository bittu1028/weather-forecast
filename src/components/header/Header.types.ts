export interface IHeaderProps {
  onChange: (e: any) => void;
  onKeyDown: (e: any) => void;
  searchQuery: string;
  isSearching: boolean;
  onSearchWeather: () => void;
}
