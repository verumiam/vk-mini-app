import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

import { fetchFact } from '@/features/fetch-fact';

const useFactForm = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [fact, setFact] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const { data, isFetched, isRefetching, refetch } = useQuery({
    queryKey: ['facts'],
    queryFn: fetchFact,
    enabled: false,
  });

  useEffect(() => {
    if (isFetched && data?.fact) {
      setFact(data.fact);
      setIsTyping(false);
    }
  }, [isFetched, data?.fact]);

  useEffect(() => {
    if (!isTyping && !isRefetching && textareaRef.current) {
      const firstSpaceIndex = fact.search(/\s|[,.:;'"`-]/);
      if (firstSpaceIndex !== -1) {
        textareaRef.current.setSelectionRange(firstSpaceIndex + 1, firstSpaceIndex);
        textareaRef.current.focus();
      }
    }
  }, [fact, isTyping, isRefetching]);

  const handleClick = () => {
    refetch();
    setIsTyping(false);
  };

  const handleChange = (value: string) => {
    setIsTyping(true);
    setFact(value);
  };

  return { handleClick, handleChange, fact, textareaRef, isRefetching };
};

export default useFactForm;
