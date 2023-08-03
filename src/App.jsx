import React from "react";
import {
  ProvideFirebase,
  ProvideUsers,
  ProvideScreens,
  ProvideTemplates,
  ProvideSections,
  ProvideProducts,
  ProvideRegistrations,
} from "./hooks";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import MainPanel from "./layouts/MainPanel";

const App = () => (
  <ProvideScreens>
    <ProvideFirebase>
      <ProvideUsers>
        <ProvideRegistrations>
          <ProvideTemplates>
            <ProvideSections>
              <ProvideProducts>
                <div className="bg-slate-800">
                  <div className="flex w-full">
                    <Sidebar />
                    <div className="w-full">
                      <Header />
                      <MainPanel />
                    </div>
                  </div>
                </div>
              </ProvideProducts>
            </ProvideSections>
          </ProvideTemplates>
        </ProvideRegistrations>
      </ProvideUsers>
    </ProvideFirebase>
  </ProvideScreens>
);

export default App;
