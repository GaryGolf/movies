export interface SearchKeyword {
  id: number;
  name: string;
}

export interface SearchKeywordData {
  page: number;
  total_pages: number;
  total_results: number;
  results: SearchKeyword[];

}