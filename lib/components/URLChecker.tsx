"use client";

import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Input } from "@/lib/components/ui/Input";
import { Loader } from "@/lib/components/ui/Loader";
import type { CheckURLResponse } from "@/lib/domain/types";
import debounce from "lodash.debounce";
import { FileDetails } from "@/lib/components/FileDetails";
import { isValidURL } from "@/lib/utils/url";

export const URLChecker = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<CheckURLResponse | null>(null);

  const checkURL = useMemo(
    () =>
      debounce(async (url: string) => {
        const formData = new FormData();
        formData.append("url", url);
        setResponse(null);

        try {
          setIsLoading(true);
          const response = await fetch("/api/check-url", {
            method: "POST",
            body: formData,
          });
          setResponse(await response.json());
        } catch (error) {
          setResponse({
            success: false,
            message: `Failed to check URL. ${error}`,
          });
        } finally {
          setIsLoading(false);
        }
      }, 400),
    [],
  );

  useEffect(() => {
    if (!url) {
      return;
    }

    if (!inputRef.current?.checkValidity() || !isValidURL(url)) {
      setResponse({ success: false, message: "Invalid URL" });
      return;
    }

    checkURL.cancel();
    checkURL(url);

    return () => {
      checkURL.cancel();
    };
  }, [checkURL, url]);

  const handleUrlChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUrl(event.currentTarget.value);
    },
    [],
  );

  return (
    <div className="flex flex-col">
      <Input
        ref={inputRef}
        type="url"
        placeholder="URL"
        pattern="\S+"
        onChange={handleUrlChange}
      />
      {isLoading && <Loader />}
      {response?.success ? (
        <FileDetails data={response.data} />
      ) : (
        <span>{response?.message}</span>
      )}
    </div>
  );
};
