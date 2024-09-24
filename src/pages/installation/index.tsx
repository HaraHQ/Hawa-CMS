import Button from "@/components/Button";
import FieldInput, { FieldTextarea } from "@/components/Input";
import LayoutInstallation from "@/components/layout/Installation";
import FieldSelect, { Option } from "@/components/Select";
import FieldToggle from "@/components/Toggle";
import loadSetup from "@/libs/loadSetup";
import { FC, useEffect, useMemo, useState } from "react";

interface DatabaseSelectionProps {
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  databaseList: Option[],
  moduleList: Option[];
  next: () => void;
}

interface DatabaseInformationProps {
  next: () => void;
}

type InstallSection = 'app' | 'dbselect' | 'dbinfo' | 'module';

const DatabaseSelection: FC<DatabaseSelectionProps> = ({
  handleSelect, databaseList, moduleList, next,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="text-xs">Choose database type:</div>
        <FieldSelect onChange={handleSelect} items={databaseList} />
      </div>
      <div>
        <div className="text-xs">Select module for database:</div>
        <FieldSelect items={moduleList} />
      </div>
      <div className="flex justify-end">
        <Button text="Next" variant="primary" onClick={() => next()} />
      </div>
    </div>
  )
}

const DatabaseInformation: FC<DatabaseInformationProps> = ({
  next,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold">Database Information</div>
      <div>
        <div className="text-xs">Hostname:</div>
        <FieldInput type="text" placeholder="localhost?" isError={false} />
      </div>
      <div>
        <div className="text-xs">Username:</div>
        <FieldInput type="text" placeholder="root" isError={false} />
      </div>
      <div>
        <div className="text-xs">Password:</div>
        <FieldInput type="password" placeholder="********" isError={false} />
      </div>
      <div>
        <div className="text-xs">Port:</div>
        <FieldInput type="number" placeholder="3306" isError={false} />
      </div>
      <div className="flex justify-end">
        <Button text="Next" variant="primary" onClick={() => next()} />
      </div>
    </div>
  )
}

const CMSModule: FC = () => {
  const [post, setPost] = useState(true);
  const [comment, setComment] = useState(true);
  useEffect(() => {
    if (!post) {
      setComment(false);
    }
  }, [post]);
  
  useEffect(() => {
    if (comment) {
      setPost(true);
    }
  }, [comment]);
  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold">Modules</div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 items-center">
          <FieldToggle onToggle={() => setPost(!post)} checked={post} /> Posts
        </div>
        <div className="flex gap-1 items-center">
          <FieldToggle onToggle={() => setComment(!comment)} checked={comment} /> Comments
        </div>
        <div className="text-xs">More module can be installed on extension</div>
      </div>
      <div className="flex justify-center">
        <Button text="Start Installation" variant="primary" />
      </div>
    </div>
  )
}

const AppSetup: FC<DatabaseInformationProps> = ({ next }) => {
  const [api, setApi] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold">App Information</div>
      <div>
        <div className="text-xs">Title:</div>
        <FieldInput type="text" placeholder="You app title" defaultValue={'Hawa-CMS'} isError={false} />
      </div>
      <div>
        <div className="text-xs">Description:</div>
        <FieldTextarea placeholder="Your app description" defaultValue={'Hawa-CMS is Next.js Blocging Platform.'} isError={false} />
      </div>
      <div>
        <div className="text-xs">Use REST API:</div>
        <FieldToggle onToggle={() => setApi(!api)} />
      </div>
      {api && (
        <div>
          <div className="text-xs">API Path:</div>
          <FieldInput type="text" placeholder="/*" defaultValue={'/*'} isError={false} />
          <div className="text-xs font-mono text-gray-500">/api/*</div>
        </div>
      )}
      <div className="flex justify-end">
        <Button text="Next" variant="primary" onClick={() => next()} />
      </div>
    </div>
  )
}

const InstallationPage: FC = () => {
  const [modules, setModules] = useState<string[]>([]);
  const [section, setSection] = useState<InstallSection>('app')
  const setupList = useMemo(() => {
    return loadSetup()
  }, []);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setModules(setupList.find(sl => sl.id === value)?.module as string[]);
  };
  const handleNext = () => {
    if (section === 'app') {
      setSection('dbselect');
    } else if (section === 'dbselect') {
      setSection('dbinfo');
    } else if (section === 'dbinfo') {
      setSection('module');
    }
  };
  
  return (
    <LayoutInstallation>
      <div className="w-[300px] p-6 bg-neutral-200 rounded-lg shadow-md flex flex-col gap-6">
        <div className="text-3xl font-semibold text-center w-full">Hawa-CMS</div>
        {section === 'app' && (
          <AppSetup next={handleNext} />
        )}
        {section === 'dbselect' && (
          <DatabaseSelection handleSelect={handleSelect} databaseList={setupList.map((l) => {
            return {
              value: l.id,
              label: l.title
            }
          })} moduleList={modules.map((l) => {
            return {
              value: l,
              label: l
            }
          })} next={handleNext} />
        )}
        {section === 'dbinfo' && (
          <DatabaseInformation next={handleNext} />
        )}
        {section === 'module' && (
          <CMSModule />
        )}
      </div>
    </LayoutInstallation>
  )
}

export default InstallationPage;