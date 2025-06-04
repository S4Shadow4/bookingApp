import PageContainer from '@/components/page-container';
import PageTitle from '@/components/page-title';
import React from 'react';

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <PageContainer>
      <div className="p-6">
        <PageTitle title={`Categorie ${slug}`} />
      </div>
    </PageContainer>
  );
};

export default CategoryPage;
