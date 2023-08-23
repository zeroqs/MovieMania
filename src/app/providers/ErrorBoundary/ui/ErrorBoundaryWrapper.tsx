import { ProviderProps } from '@/shared/types/types'

import { ErrorBoundary } from './ErrorBoundary'

export const ErrorBoundaryWrapper = ({ children }: ProviderProps) => (
  <ErrorBoundary>{children}</ErrorBoundary>
)
