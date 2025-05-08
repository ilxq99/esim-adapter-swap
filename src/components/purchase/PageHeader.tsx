
interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h1 className="text-3xl font-bold text-dark mb-4">
        {title}
      </h1>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
