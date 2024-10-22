import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/yahyavaleo/notes",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [Component.Graph(), Component.DesktopOnly(Component.TableOfContents())],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}

const customOrder: { [folder: string]: string[] } = {
  JavaScript: [
    "Grammar",
    "Data Types",
    "Expressions",
    "Control Flow",
    "Loops",
    "Destructuring",
    "Functions",
    "Arrays",
    "Objects",
    "Classes",
    "Promises",
    "Modules",
    "JavaScript",
  ],
  "Mathematics/Statistics": ["Assets", "Location", "Dispersion", "Shape", "Graphs", "Correlation"],
}

Component.Explorer({
  folderDefaultState: "open", // default state of folders ("collapsed" or "open")
  sortFn: (a, b) => {
    // Function to determine the folder and subfolder name from the file's path
    const getFolderName = (filePath: any) => {
      const parts = filePath.split("/")
      return parts.length > 1 ? parts.slice(0, -1).join("/") : "" // Full path minus the file
    }

    // Get the folder/subfolder names for the current files
    const aFolder = getFolderName(a.file?.path || "")
    const bFolder = getFolderName(b.file?.path || "")

    // If both files are in the same folder or subfolder, apply the folder-specific sort
    if (a.file && b.file && aFolder === bFolder) {
      const folderOrder = customOrder[aFolder] || []

      const aIndex = folderOrder.indexOf(a.displayName)
      const bIndex = folderOrder.indexOf(b.displayName)

      // If both files are found in the customOrder for the folder, sort by their order
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex
      }

      // If only one of the files is found in customOrder, it takes precedence
      if (aIndex !== -1) return -1
      if (bIndex !== -1) return 1

      // If neither file is found in customOrder, sort alphabetically by display name
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }

    // Files in different folders or subfolders are sorted separately (alphabetical by folder)
    return aFolder.localeCompare(bFolder, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})
