import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useFiltersStore } from '../store';

interface Props {
  totalResults: number;
}

export function ListPagination({ totalResults }: Props) {
  const { page, setPage, limit } = useFiltersStore();

  const isMinPage = page === 1;
  const isMaxPage = Math.ceil(totalResults / limit) === page;

  const handlePrevPage = () => setPage(page - 1);
  const handleNextPage = () => setPage(page + 1);

  return (
    <Box display="flex" justifyContent="space-between" mb="4">
      <Button leftIcon={<ArrowBackIcon />} disabled={isMinPage} onClick={handlePrevPage}>
        Prev
      </Button>
      <Button rightIcon={<ArrowForwardIcon />} disabled={isMaxPage} onClick={handleNextPage}>
        Next
      </Button>
    </Box>
  );
}
