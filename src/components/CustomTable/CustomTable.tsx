// components/Table.tsx
import React, { useState } from 'react';
import "./CustomTable.css"

type Column<T> = {
  header: string;
  accessor: keyof T;
  render?: (value: any, row: T) => React.ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  actions?: (row: T) => React.ReactNode;
  className?: string;
  onRowClick?: (row: T) => void;
  pageSizeOptions?: number[];
};

export function CustomTable<T extends object>({
  data,
  columns,
  actions,
  className = '',
  onRowClick,
  pageSizeOptions = [10, 25, 50, 100],
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);

  const totalCount = data.length;
  const totalPages = Math.ceil(totalCount / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  return (
    <div className={`table-wrapper ${className}`}>
      <div className="table-scroll-container">
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col.header}</th>
              ))}
              {actions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (actions ? 1 : 0)}>No data available</td>
              </tr>
            ) : (
              paginatedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  onClick={() => onRowClick?.(row)}
                  style={{ cursor: onRowClick ? 'pointer' : 'default' }}
                >
                  {columns.map((col, colIndex) => (
                    <td key={colIndex}>
                      {col.render
                        ? col.render(row[col.accessor], row)
                        : (row[col.accessor] as React.ReactNode)}
                    </td>
                  ))}
                  {actions && <td>{actions(row)}</td>}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="table-footer">
        <span>
          Total Count: <strong>{totalCount}</strong>
        </span>

        <div className="pagination">
  <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
    {'<'}
  </button>

  {Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((page) => {
      return (
        page === 1 || // first page
        page === totalPages || // last page
        (page >= currentPage - 1 && page <= currentPage + 1) // around current page
      );
    })
    .reduce((acc: (number | string)[], page, index, array) => {
      if (index > 0 && page - (array[index - 1] as number) > 1) {
        acc.push('...');
      }
      acc.push(page);
      return acc;
    }, [])
    .map((page, index) =>
      page === '...' ? (
        <span key={`ellipsis-${index}`} className="ellipsis">...</span>
      ) : (
        <button
          key={page}
          onClick={() => handlePageChange(page as number)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      )
    )}

  <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
    {'>'}
  </button>

 <select
  aria-label="Select page size"
  value={pageSize}
  onChange={(e) => handlePageSizeChange(Number(e.target.value))}
>
  {pageSizeOptions.map((size) => (
    <option key={size} value={size}>
      {size} / page
    </option>
  ))}
</select>

</div>


      </div>
    </div>
  );
}