import { useAppDispatch } from "store/reduxHooks";
import { useEffect, useCallback } from "react";

import { useGenericElementRef } from "./useGenericElementRef";

const options = {
  root: null,
  rootMargin: "0px 0px 1px 0px",
  threshold: 1.0,
};

interface ApiUrls {
  urlForInitialRequest: string;
  urlForNextRequest: string;
}

interface Updaters<A, U> {
  actionCreator: A;
  initialUpdater: U;
  onScrollUpdater: U;
}

export function useInfiniteScroll<
  ObservedElement extends Element,
  A extends Function,
  U,
>(apiUrls: ApiUrls, updaters: Updaters<A, U>) {
  const { urlForInitialRequest, urlForNextRequest } = apiUrls;
  const { actionCreator, initialUpdater, onScrollUpdater } = updaters;

  const dispatch = useAppDispatch();

  const observedElementRef = useGenericElementRef<ObservedElement>();

  const handleObserver = useCallback(
    (entries: any) => {
      const [entry] = entries;
      const { isIntersecting, intersectionRatio } = entry;
      if (isIntersecting || Math.floor(intersectionRatio) === 1)
        dispatch(actionCreator(urlForNextRequest, onScrollUpdater));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, urlForNextRequest],
  );

  useEffect(() => {
    dispatch(actionCreator(urlForInitialRequest, initialUpdater));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, urlForInitialRequest]);

  useEffect(() => {
    const target = observedElementRef.current;
    const observer = new IntersectionObserver(handleObserver, options);
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [observedElementRef, handleObserver]);

  return observedElementRef;
}
