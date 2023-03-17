import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@component/components/Sidebar";

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  );
}

// This were we add Sidebar and GlassPane to the page.
// rainbow-mesh instead of candy-mesh
