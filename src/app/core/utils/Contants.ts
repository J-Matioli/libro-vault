import { MatPaginatorIntl, PageEvent } from "@angular/material/paginator";

export class Constants {
    public static pageSettings(): PageEvent {
        return {
            length: 0,
            pageIndex: 0,
            pageSize: 10,
        };
    }

    public static pageSizeOptions: number[] = [10, 25, 50, 100];     
}

const ptRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
      return `0 de ${length}`;
    }
  
    length = Math.max(length, 0);
  
    const startIndex = page * pageSize;
  
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
  
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };

export function getPtPaginatorIntl() {
    const paginatorIntl = new MatPaginatorIntl();
  
    paginatorIntl.itemsPerPageLabel = 'Itens por página:';
    paginatorIntl.nextPageLabel = 'Próxima página';
    paginatorIntl.previousPageLabel = 'Página anterior';
    paginatorIntl.firstPageLabel = "Primeira página";
    paginatorIntl.lastPageLabel = "Última página";
    paginatorIntl.getRangeLabel = ptRangeLabel;
  
    return paginatorIntl;
}