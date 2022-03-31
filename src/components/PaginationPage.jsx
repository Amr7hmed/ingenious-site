import { Pagination } from "antd";

function PaginationPage() {
  return (
    <div className="py-5 text-center">
      <div className="container">
        <Pagination defaultCurrent={1} total={500} showSizeChanger={false} />
      </div>
    </div>
  );
}

export default PaginationPage;
