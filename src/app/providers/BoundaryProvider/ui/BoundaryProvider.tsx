import { type FC, type PropsWithChildren } from "react"
import { ErrorBoundary } from "react-error-boundary"

import { ErrorPage } from "widgets/ErrorPage"

export const BoundaryProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ErrorBoundary FallbackComponent={ErrorPage}>{children}</ErrorBoundary>
}
