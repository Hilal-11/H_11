import type { ComponentType } from "react"
import LokalhostCaseStudy, { lokalhostMeta, lokalhostToc } from "./LokalhostCaseStudy"
import SnaplnkCaseStudy, { snaplnkMeta, snaplnkToc } from "./SnaplnkCaseStudy"

export interface CaseStudyEntry {
  title: string
  subtitle?: string
  toc: { id: string; label: string }[]
  Content: ComponentType
}

/** slug (from POSTS in config) -> full write-up. Add new case studies / blogs here. */
export const CASE_STUDIES: Record<string, CaseStudyEntry> = {
  lokalhost_ui: { ...lokalhostMeta, toc: lokalhostToc, Content: LokalhostCaseStudy },
  snaplnk: { ...snaplnkMeta, toc: snaplnkToc, Content: SnaplnkCaseStudy },
}
