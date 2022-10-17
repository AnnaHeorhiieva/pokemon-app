import React, { ReactNode } from "react";

import LoadingScreen from "components/shared/loading-screen/LoadingScreen";
import NoDataScreen from "components/shared/no-data-screen/NoDataScreen";

interface SideEffectsHandlerProps {
  loading: boolean;
  error: string;
  children: ReactNode;
}

function SideEffectsHandler({
  loading,
  error,
  children,
}: SideEffectsHandlerProps): any {
  if (loading) return <LoadingScreen />;

  if (error) return <NoDataScreen />;

  return children;
}

export default SideEffectsHandler;
