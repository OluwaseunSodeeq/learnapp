import { useRouter, useSearchParams } from 'next/navigation'

export default function usePagination({ count, pageSize }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.ceil(count / pageSize);

  const updatePage = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page);
    router.push(`?${params.toString()}`);
  };

  const previousPage = () => {
    updatePage(Math.max(1, currentPage - 1));
  };

  const nextPage = () => {
    updatePage(Math.min(totalPages, currentPage + 1));
  };
  
  return {previousPage, nextPage, updatePage,currentPage,totalPages}
}
